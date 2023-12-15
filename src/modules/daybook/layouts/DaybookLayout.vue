<template>

    <navbar-comp/>
<div class="d-flex">
     <div class="col-4">
      <entry-list/>
     </div>
    <div class="col">
        <router-view/>
    </div>
</div>
   
</template>
<script>
import { defineAsyncComponent } from 'vue'
 
export default {
   
    components:{
        NavbarComp:defineAsyncComponent(()=>import('@/modules/daybook/components/NavbarComponent.vue')),
        EntryList:defineAsyncComponent(()=>import('@/modules/daybook/components/EntryList.vue'))
    }
}
</script>