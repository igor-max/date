<template>
  <div id="app">
    <default-header>
        {{ headerTitle }}
    </default-header>
    <search-input />
    <default-tab />
    <router-view/>
  </div>
</template>

<script>
    import DefaultHeader from "@/components/header";
    import DefaultTab from "@/components/tab";
    import SearchInput from "@/components/searchInput";
    import { mapState } from "vuex";
    export default {
        components: {
            DefaultHeader,
            DefaultTab,
            SearchInput
        },
        computed: {
            ...mapState(['headerTitle'])
        },
        created() {
            this.$store.commit('setPlaceholder', 'day');
        },
        watch: {
            $route(to, from){
                const routeName = to.path === "/" ? "day" : to.path.replace(/\//, '');
                this.$store.commit('setHeaderTitle', routeName);
                this.$store.commit('setMaxlength', routeName);
                this.$store.commit('setPlaceholder', routeName);
            }
        }
    }
</script>

