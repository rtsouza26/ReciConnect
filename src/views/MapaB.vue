<template>
    <button @click.stop.prevent = "emitClick(this.login)">teste</button>
</template>

<script>
export default {
    name:"MapaB",
    data(){
        return{
            login:false
                
                
        
        }
    },
    methods:{
        emitClick(){
            this.$emit('emitClick',login)
        }
    }


}
</script>

<style>

</style>
