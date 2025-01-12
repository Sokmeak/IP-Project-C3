<template>
  <div class="product-review">
    <h3>Reviews</h3>
    <div class="rating">
      <span>{{ averageRating }}</span>
      <span> from {{ reviews.length }} reviews</span>
    </div>
    <div v-for="(review, index) in reviews" :key="index" class="review">
      <div class="reviewerProfile"></div>
      <div class="reviewDetails">
        <h6>{{ review.username }}</h6>
        <p>
          <i class="fa-solid fullStar fa-star" style="color: gold"></i>
          <i class="fa-solid fullStar fa-star" style="color: gold"></i>
          <i class="fa-solid fullStar fa-star" style="color: gold"></i>
          <i class="fa-solid fullStar fa-star" style="color: gold"></i>
        </p>
        <p>{{ review.comment }}</p>
      </div>
    </div>
    <!-- <button @click="loadMore" v-if="showLoadMore">Show more</button> -->

    <PrimaryButton
      v-if="showLoadMore"
      class="show-more"
      content="Show more"
      type="button"
      @click="loadMore"
    ></PrimaryButton>
  </div>
</template>

<script>
import PrimaryButton from "../Buttons/PrimaryButton.vue";
export default {
  components: {
    PrimaryButton,
  },
  props: {
    reviews: {
      type: Array,
      required: true,
    },
  },
  data() {
    return {
      displayedReviews: 3,
    };
  },
  computed: {
    averageRating() {
      const total = this.reviews.reduce((sum, r) => sum + r.rating, 0);
      return (total / this.reviews.length).toFixed(1);
    },
    showLoadMore() {
      return this.displayedReviews < this.reviews.length;
    },
  },
  methods: {
    loadMore() {
      this.displayedReviews += 3;
    },
  },
};
</script>

<style scoped>
.rating {
  font-size: 1.5rem;
  font-weight: bold;
}
.reviewerProfile {
  height: 4rem;
  width: 4rem;
  border-radius: 50%;
  background-color: #af47d2;
}
.review {
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 1rem;
  border-bottom: 1px solid #ddd;
  margin-bottom: 15px;
  padding-bottom: 10px;
}
.reviewDetails {
  display: flex;
  flex-direction: column;
  gap: 0rem;
}
.show-more {
  border-radius: 5px;
  padding: 0.5rem;
  height: 3rem;
  font-size: 0.9rem;
}
</style>
