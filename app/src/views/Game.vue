<template>
  <div class="game-container">

    <div class="container-quiz">
        <div class="header-trivia">
            <h1>Trivia Game</h1>
        </div>
    </div>

    <div>
        <h2>Result</h2>
        <h2>1p</h2>
        <div class="btn-restart">
            <button>Restart</button>
        </div>
    </div>

    <div class="footer-quiz">
        <div v-if="progress < 100" class="box-button">
            <button class="game-btn">Skip</button>
            <button class="game-btn" >Next</button>
        </div>  
    </div>           
</div>
</template>

<script>
export default {
  data(){
    return{
    }
  },
  name: 'App',
  components: {
    
  },
  computed:{
      
  },
  methods:{
    
  }
}
</script>
