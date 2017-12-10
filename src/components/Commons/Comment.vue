<template>
  <div>
    <div class="photo-bottom">
      <ul>
        <li class="photo-comment">
          <div>
            <span>提交评论</span>
            <span>
                <a>返回</a>
              </span>
          </div>
        </li>
        <li class="txt-comment">
          <textarea clos="50" v-model="content"></textarea>
        </li>
        <li>
          <mt-button type="primary" size="large">发表评论</mt-button>
        </li>
        <li class="photo-comment">
          <div>
            <span>评论列表</span>
            <span>44条评论</span>
          </div>
        </li>
      </ul>
      <ul class="comment-list">
        <li v-for="(comment, index) in comments" :key="comment">
          {{comment.user_name}}:{{comment.content}} {{comment.add_time | convertTime}}
        </li>
      </ul>
      <mt-button type="danger" size="large" plain @click="loadMore">加载更多{{page}}</mt-button>
    </div>
  </div>
</template>
<script>
  export default {
    name: 'comment',
    props: ['cid'],
    data() {
      return {
        comments: [], //评论信息
        page: 1, //页码
        content: '', //评论内容
        id: 37, //当前主体id
      }
    },
    methods: {
      sendComment() {
        this.$axios.post(`postcomment/this.id`, `content=${this.content}`)
          .then(res => {
            // 调用loadByPage函数
            this.loadBypage(1) //函数内部会自增
          })
          .catch(err => {
            console.log(err)
          })
      },
      loadMore() {
        //判断是否有数据
        if (!this.hasData) return
        this.$axios.get(`getcomments/:${this.id}?pageindex=${this.page}`)
          .then(res => {
            this.comments = this.comments.concat(res.data.message)
            // 设置数据检查结果
            if (res.data.message.length == 0) {
              this.hasData = false
              this.$toast('没有更多数据了')
              return
            }
            this.page++ //page也要自增
          })
          .catch(err => {
            console.log(err)
          })
      },
      loadByPage(page) {
        // 获取参数 url + data  
        this.$axios.get(`getcomments/${this.id}?pageid?pageindex=${page}`)
          .then(res => {
            this.comments = res.data.message
            this.page++ //页码自增
          })
          .catch(err => {
            console.log(is - error)
          })
      }
    },
    created() {
      // 接收父组件参数
      this.id = this.cid
      this.page = this.$route.query.pageindex || 1
      // 调用loadByPage函数
      this.loadByPage(this.page)
    },
  }
</script>
<style scoped>
  .photo-comment>div span:nth-child(1) {
    float: left;
    font-weight: bold;
    margin-left: 5px;
  }
  .photo-comment>div span:nth-child(2) {
    float: right;
  }
  .photo-comment {
    height: 30px;
    border-bottom: 1px solid rgba(0, 0, 0, 0.4);
    line-height: 30px;
    margin-bottom: 5px;
  }
  .txt-comment {
    padding: 5 5;
  }
  .txt-comment textarea {
    margin-bottom: 5px;
  }
  .comment-list li {
    border-bottom: 1px solid rgba(0, 0, 0, 0.2);
    padding-bottom: 5px;
    margin-bottom: 5px;
    padding-left: 5px;
  }
  li {
    list-style: none;
  }
  ul {
    margin: 0;
    padding: 0;
  }
</style>