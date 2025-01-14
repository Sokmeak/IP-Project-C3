<template>
  <div class="product-review">
    <!-- <h3>Reviews</h3> -->
    <div class="rating">
      <div>
        <span class="averageRating">{{ averageRating }}</span>
      </div>
      <div>
        <!-- A function for printing start -->

        <div v-html="generateStars(averageRating)"></div>
        <div class="numRate">from {{ reviews.length }} reviews</div>
      </div>
    </div>
    <div
      v-for="(review, index) in reviews.slice(0, displayedReviews)"
      :key="index"
      class="review"
    >
      <div class="reviewerProfile"></div>
      <div class="reviewDetails">
        <h6>{{ review.username }}</h6>
        <p>
          <i class="fa-solid fullStar fa-star" style="color: #ff8f00"></i>
          <i class="fa-solid fullStar fa-star" style="color: #ff8f00"></i>
          <i class="fa-solid fullStar fa-star" style="color: #ff8f00"></i>
          <i class="fa-solid fullStar fa-star" style="color: #ff8f00"></i>
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

    <!-- Show Fewer Button -->
    <PrimaryButton
      v-if="showShowFewer"
      class="show-fewer"
      content="Show fewer"
      type="button"
      @click="showFewer"
    ></PrimaryButton>

    <!-- User Rating and Comment Form -->
    <div class="user-review-form">
      <h3>Leave a Review</h3>
      <label for="rating">Your Rating:</label>
      <select v-model="newRating" id="rating">
        <option v-for="star in 5" :key="star" :value="star">{{ star }}</option>
      </select>

      <label for="comment">Your Comment:</label>
      <textarea v-model="newComment" id="comment" rows="3"></textarea>

      <PrimaryButton
        class="submit-review"
        content="Submit Review"
        type="button"
        @click="submitReview"
      ></PrimaryButton>
    </div>
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
    rating: {
      type: Number,
      required: true,
    },
  },
  data() {
    return {
      displayedReviews: 3,
      newRating: 5, // Default rating value
      newComment: "", // Default comment value
      username: "",
    };
  },
  created() {
    // Retrieve the username from local storage
    this.username = localStorage.getItem("currentUsername") || "Guest";
  },
  computed: {
    averageRating() {
      const total = this.reviews.reduce((sum, r) => sum + r.rating, 0);
      return (total / this.reviews.length).toFixed(1);
    },
    showLoadMore() {
      return this.displayedReviews < this.reviews.length;
    },
    showShowFewer() {
      return this.displayedReviews > 3;
    },
  },

  methods: {
    loadMore() {
      this.displayedReviews += this.rating;
    },
    showFewer() {
      this.displayedReviews = 3; // Ensure at least 3 reviews are shown
    },
    generateStars(rating) {
      const stars = [];
      for (let i = 1; i <= 5; i++) {
        if (i <= Math.floor(rating)) {
          stars.push(
            '<i class="fa-solid fullStar fa-star" style="color: #FF8F00"></i>'
          );
        } else if (i - 0.5 <= rating) {
          stars.push(
            '<i class="fa-solid fa-star-half-alt" style="color: #FF8F00"></i>'
          );
        } else {
          stars.push('<i class="fa-regular fa-star" style="color: gray"></i>');
        }
      }
      return stars.join(" ");
    },

    submitReview() {
      if (!this.newComment.trim()) {
        alert("Please provide a comment.");
        return;
      }
      const newReview = {
        username: this.username, // You can replace this with user data if available
        rating: this.newRating,
        comment: this.newComment,
      };
      this.reviews.unshift(newReview);
      this.newComment = ""; // Clear the comment field
      this.newRating = 5; // Reset the rating to default
    },
  },
};
</script>

<style scoped>
.averageRating {
  font-size: 4rem;
}
.product-review {
  display: flex;
  flex-direction: column;
  justify-content: start;
  width: 35vw;
  height: 60vh;
  overflow-y: auto;
  scroll-behavior: smooth;
  gap: 2rem;
}
.numRate {
  font-size: small;
  font-weight: 400;
}
.rating {
  font-size: 1.5rem;
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 0.8rem;
  font-weight: bold;
  border-bottom: 1px solid #ddd;
 
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
  align-items: start;
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
.show-more,
.show-fewer {
  /* border-radius: 5px;
  padding: 0.5rem;
  height: 3rem;
  width: fit-content;
  font-size: 0.9rem;
  margin-top: 10px;
  outline: #af47d2; */
  width: fit-content;
  border-radius: 15px;
  padding: 0.5rem 8rem;
  background-color: #af47d2;
  color: white;
  font-size: 1rem;
  border: none;
  cursor: pointer;
}

.user-review-form {
  margin-top: 2rem;
  display: flex;
  flex-direction: column;
  gap: 1rem;
}
.user-review-form label {
  font-weight: bold;
}
.user-review-form textarea {
  width: 100%;
  resize: none;
  padding: 0.5rem;
}
.submit-review {
  align-self: flex-start;
  border-radius: 5px;
  padding: 0.5rem 1rem;
  background-color: #af47d2;
  color: white;
  font-size: 1rem;
  border: none;
  cursor: pointer;
}
.submit-review:hover {
  background-color: #8e38b3;
}
</style>
