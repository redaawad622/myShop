<template>
  <div class="d-flex justify-center align-center logo" :class="{'borderDark':$vuetify.theme.dark}">{{name}}</div>
</template>

<script>
export default {
   name:'logo',
   props:{
     name:{
       type:String,
       default:"MS"
     }
   }
}
</script>

<style lang="scss">
.logo{
  border:1px solid #000;
  padding: 10px;
  font-size: 18px;
  font-weight: bold;
  border-radius: 50%;
  width: 50px;
  height: 50px;
}
.borderDark{
  border-color:#FFF;
}
</style>