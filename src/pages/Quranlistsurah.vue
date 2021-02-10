<template>
  <Layout>
    <div class="container-inner mx-auto py-16">
      <div
        v-for="post in $page.posts.edges"
        :key="post.id"
        class="post border-gray-400 border-b mb-12"
      >
        <h2 class="text-3xl font-bold mb-3">
          <g-link :to="post.node.path" class="text-copy-primary">{{
            post.node.surah_name
          }}</g-link>
        </h2>
        <div class="text-copy-secondary mb-4">
          <span>{{ post.node.relevation }}</span>
          <!-- <span> &middot; </span>
          <span>{{ post.node.timeToRead }} min read</span> -->
        </div>

        <div class="text-lg mb-4">
          {{ post.node.transliteration_id }} - {{ post.node.translation }}
        </div>

        <div class="text-md mb-4">
          {{ post.node.tafsir }}
        </div>

        <div class="mb-8">
          <g-link :to="post.node.path" class="font-bold uppercase"
            >Read More</g-link
          >
        </div>
      </div>
      <!-- end post -->
      <pagination-posts
        v-if="$page.posts.pageInfo.totalPages > 1"
        base="/Quranlistsurah"
        :totalPages="$page.posts.pageInfo.totalPages"
        :currentPage="$page.posts.pageInfo.currentPage"
      />
    </div>
  </Layout>
</template>

<page-query>
query QuranPost($page:Int){
  posts: allQuranPost(order: ASC, perPage: 3, page: $page ) @paginate{
    totalCount,
    pageInfo{
      totalPages,
      currentPage
    },
    edges{
      node{
        surah_name,
        id,
        transliteration_id,
        relevation,
        translation,
        tafsir
      }
    }
  }
}
</page-query>

<script>
import PaginationPosts from "../components/PaginationPosts";

export default {
  metaInfo: {
    title: "Blog",
  },
  components: {
    PaginationPosts,
  },
};
</script>

