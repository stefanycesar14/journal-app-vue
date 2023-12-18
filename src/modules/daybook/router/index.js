export default {
  name: "daybook-layout",
  component: () =>
    import(
      /* webpackChunkName: "daybookLayout" */ "@/modules/daybook/layouts/DaybookLayout.vue"
    ),
  children: [
    {
      path: "",
      name:'no-entry',
      component: () =>   import(/* webpackChunkName: "daybook-noEntry" */ "@/modules/daybook/views/NoEntrySelected.vue")
    },
    {
      path: ":id",
      name:'entry',
      component: () =>   import(/* webpackChunkName: "daybook-Entry" */ "@/modules/daybook/views/EntryView.vue"),
      props:(route)=>{
        return{
          id:route.params.id
        }
      }
    },
  ],
};
