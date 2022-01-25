<template>
  <div class="home"></div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from "@/components/HelloWorld.vue";

export default {
  name: "Home",
  components: {
    HelloWorld,
  },

  mounted() {
    this.getData();
  },

  methods: {
    async getData() {
      let { data, error } = await this.$supabase.from("tb_produk").select();
      if (data) console.log(data);
      if (error) console.log(error);
    },
  },
};
</script>
