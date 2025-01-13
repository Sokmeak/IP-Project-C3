import { defineStore } from "pinia";

export const useProductStore = defineStore("products", {
  state: () => ({
    products: [],
  }),
  getters: {
    //get product by types
    // Men
    // Get products by type
    getProductsByType: (state) => {
      return (type) =>
        state.products.filter((product) => product.productType === type);
    },

    // getProductByTypeAndGroup: (state) => (type, group) => {
    //   console.log("Products:", state.products);
    //   console.log("Type:", type, "Group:", group);
    //   return state.products.filter(
    //     (product) =>
    //       product.productGroup === group && product.productType === type
    //   );
    // },

    getProductByTypeAndGroup: (state) => (type, group) => {
      console.log("Products:", state.products);
      console.log("Type:", type, "Group:", group);

      return state.products.filter((product) => {
        // Check conditions based on whether type or group is provided
        const matchesType = type ? product.productType === type : true;
        const matchesGroup = group ? product.productGroup === group : true;

        return matchesType && matchesGroup;
      });
    },

    getBestOfferProducts:
      (state) =>
      (type = null) => {
        return state.products.filter(
          (product) =>
            product.rating > 3 && (type ? product.productType === type : true)
        );
      },

    // Get best offer products (rating >= 4)
    // getBestOfferProducts: (state) => {
    //   return state.products.filter((product) => product.rating > 3);
    // },

    // getBestOfferProducts: (state) => (type) => {
    //   return state.products.filter(
    //     (product) => product.rating > 3 && product.type === type
    //   );
    // },

    // Get best-for-today products (promotionPercentage >= 20)
    getBestForTodayProducts: (state) => {
      return state.products.filter(
        (product) => product.promotionPercentage >= 20
      );
    },

    // Get Khmer Traditional products
    getKhmerTraditionalProducts: (state) => {
      return state.products.filter((product) =>
        product.productGroup.startsWith("Tradi")
      );
    },
    //  Trending banner

    // only id, name, image

    //  Trending video
    // only id, name, video
  },

  // fake fetchProducts action
  actions: {
    async fetchProducts() {
      await new Promise((resolve) => {
        setTimeout(() => {
          resolve([
            {
              productId: 1,
              productName: "T-shirt Men 1",
              productType: "Men",
              productGroup: "T-shirt",
              productImages: [
                "Men/angkorWatT-shirt.jpg",
                "Men/men1_image2.jpg",
              ],
              description: "Comfortable cotton T-shirt",
              quantity: 0,
              rating: 4,
              promotionPercentage: 0,
              price: 100,
            },
            {
              productId: 2,
              productName: "Shirt Men 2",
              productType: "Men",
              productGroup: "Shirt",
              productImages: [
                "Men/angkorWatT-shirt.jpg",
                "Men/men2_image2.jpg",
              ],
              description: "Formal white shirt Formal white shirt",
              quantity: 30,
              rating: 4.5,
              promotionPercentage: 15,
              price: 200,
            },
            {
              productId: 3,
              productName: "Pant Men 3",
              productType: "Men",
              productGroup: "Pant",
              productImages: [
                "Men/angkorWatT-shirt.jpg",
                "Men/men3_image2.jpg",
              ],
              description: "Casual blue jeans",
              quantity: 40,
              rating: 3,
              promotionPercentage: 5,
              price: 300,
            },
            {
              productId: 4,
              productName: "Towel Men 4",
              productType: "Men",
              productGroup: "Towel",
              productImages: [
                "Men/angkorWatT-shirt.jpg",
                "Men/men4_image2.jpg",
              ],
              description: "Soft bath towel",
              quantity: 25,
              rating: 4,
              promotionPercentage: 20,
              price: 50,
            },
            {
              productId: 5,
              productName: "Traditional Suit Men 5",
              productType: "Men",
              productGroup: "Traditional Suit",
              productImages: [
                "Men/angkorWatT-shirt.jpg",
                "Men/men5_image2.jpg",
              ],
              description: "Elegant traditional attire",
              quantity: 15,
              rating: 4.5,
              promotionPercentage: 12,
              price: 500,
            },
            {
              productId: 6,
              productName: "T-shirt Men 6",
              productType: "Men",
              productGroup: "T-shirt",
              productImages: ["Men/angkorWatT-shirt.jpg", "men6_image2.jpg"],
              description: "Graphic print T-shirt",
              quantity: 60,
              rating: 3,
              promotionPercentage: 5,
              price: 120,
            },
            {
              productId: 7,
              productName: "Shirt Men 7",
              productType: "Men",
              productGroup: "T-Shirt",
              productImages: ["Men/angkorWatT-shirt.jpg", "men7_image2.jpg"],
              description: "Slim fit office shirt",
              quantity: 20,
              rating: 4,
              promotionPercentage: 10,
              price: 220,
            },
            {
              productId: 8,
              productName: "Pant Men 8",
              productType: "Men",
              productGroup: "Pant",
              productImages: ["Men/angkorWatT-shirt.jpg", "men8_image2.jpg"],
              description: "Chino pants",
              quantity: 50,
              rating: 4.5,
              promotionPercentage: 8,
              price: 350,
            },
            {
              productId: 9,
              productName: "Towel Men 9",
              productType: "Men",
              productGroup: "Towel",
              productImages: ["Men/angkorWatT-shirt.jpg", "men9_image2.jpg"],
              description: "Large bath towel",
              quantity: 40,
              rating: 4,
              promotionPercentage: 12,
              price: 70,
            },
            {
              productId: 10,
              productName: "Traditional Men 10",
              productType: "Men",
              productGroup: "Traditional Suit",
              productImages: ["Men/angkorWatT-shirt.jpg", "men10_image2.jpg"],
              description: "Luxury formal suit",
              quantity: 12,
              rating: 4.5,
              promotionPercentage: 15,
              price: 700,
            },
            {
              productId: 11,
              productName: "T-shirt Men 11",
              productType: "Men",
              productGroup: "T-shirt",
              productImages: ["Men/angkorWatT-shirt.jpg", "men11_image2.jpg"],
              description: "Athletic workout tee",
              quantity: 70,
              rating: 3,
              promotionPercentage: 5,
              price: 130,
            },
            {
              productId: 12,
              productName: "Shirt Men 12",
              productType: "Men",
              productGroup: "Shirt",
              productImages: ["Men/ngkorWatT-shirt.jpg", "men12_image2.jpg"],
              description: "Plaid casual shirt",
              quantity: 25,
              rating: 4,
              promotionPercentage: 10,
              price: 240,
            },
            {
              productId: 13,
              productName: "Pant Men 13",
              productType: "Men",
              productGroup: "Pant",
              productImages: ["Men/angkorWatT-shirt.jpg", "men13_image2.jpg"],
              description: "Comfort fit trousers",
              quantity: 30,
              rating: 4.5,
              promotionPercentage: 7,
              price: 300,
            },
            {
              productId: 14,
              productName: "Towel Men 14",
              productType: "Men",
              productGroup: "Towel",
              productImages: ["Men/angkorWatT-shirt.jpg", "men14_image2.jpg"],
              description: "Durable travel towel",
              quantity: 35,
              rating: 3,
              promotionPercentage: 8,
              price: 60,
            },
            {
              productId: 15,
              productName: "Traditional Suit Men 15",
              productType: "Men",
              productGroup: "Traditional Suit",
              productImages: ["Men/angkorWatT-shirt.jpg", "men15_image2.jpg"],
              description: "Cultural attire",
              quantity: 20,
              rating: 4,
              promotionPercentage: 10,
              price: 550,
            },
            {
              productId: 16,
              productName: "T-shirt Men 16",
              productType: "Men",
              productGroup: "Pans",
              productImages: ["Men/angkorWatT-shirt.jpg", "men16_image2.jpg"],
              description: "Vintage graphic tee",
              quantity: 80,
              rating: 4.5,
              promotionPercentage: 12,
              price: 140,
            },
            {
              productId: 17,
              productName: "Shirt Men 17",
              productType: "Men",
              productGroup: "Shirt",
              productImages: ["Men/angkorWatT-shirt.jpg", "men17_image2.jpg"],
              description: "Classic button-down",
              quantity: 30,
              rating: 3,
              promotionPercentage: 6,
              price: 260,
            },
            {
              productId: 18,
              productName: "Pant Men 18",
              productType: "Men",
              productGroup: "Pant",
              productImages: ["Men/angkorWatT-shirt.jpg", "men18_image2.jpg"],
              description: "Stretchable formal pant",
              quantity: 40,
              rating: 4,
              promotionPercentage: 9,
              price: 400,
            },
            {
              productId: 19,
              productName: "Towel Men 19",
              productType: "Men",
              productGroup: "Towel",
              productImages: ["Men/angkorWatT-shirt.jpg", "men19_image2.jpg"],
              description: "Microfiber towel",
              quantity: 50,
              rating: 4.5,
              promotionPercentage: 10,
              price: 90,
            },
            {
              productId: 20,
              productName: "Traditional Suit Men 20",
              productType: "Men",
              productGroup: "Traditional Suit",
              productImages: ["Men/angkorWatT-shirt.jpg", "men20_image2.jpg"],
              description: "Traditional suit",
              quantity: 15,
              rating: 3,
              promotionPercentage: 11,
              price: 600,
            },

            {
              productId: 41,
              productName: "Shirt Children 1",
              productType: "Children",
              productGroup: "Shirt",
              productImages: ["Children/children.jpg", "children1_image2.jpg"],
              description: "Soft cotton kids shirt",
              quantity: 50,
              rating: 4,
              promotionPercentage: 5,
              price: 80,
            },
            {
              productId: 42,
              productName: "Pant Children 2",
              productType: "Children",
              productGroup: "Pant",
              productImages: ["Children/children.jpg", "children2_image2.jpg"],
              description: "Comfortable kids pants",
              quantity: 45,
              rating: 4.5,
              promotionPercentage: 8,
              price: 90,
            },
            {
              productId: 43,
              productName: "T-shirt Children 3",
              productType: "Children",
              productGroup: "Skirt",
              productImages: ["Children/children.jpg", "children3_image2.jpg"],
              description: "Colorful T-shirt for kids",
              quantity: 60,
              rating: 4,
              promotionPercentage: 10,
              price: 70,
            },
            {
              productId: 44,
              productName: "Towel Children 4",
              productType: "Children",
              productGroup: "Towel",
              productImages: ["Children/children.jpg", "children4_image2.jpg"],
              description: "Cute kids bath towel",
              quantity: 20,
              rating: 4,
              promotionPercentage: 7,
              price: 50,
            },
            {
              productId: 45,
              productName: "Shirt Children 5",
              productType: "Children",
              productGroup: "Shirt",
              productImages: ["Children/children.jpg", "children5_image2.jpg"],
              description: "Stylish party shirt for kids",
              quantity: 30,
              rating: 4.5,
              promotionPercentage: 12,
              price: 100,
            },
            {
              productId: 45,
              productName: "Shirt Children 5",
              productType: "Children",
              productGroup: "Shirt",
              productImages: ["Children/children.jpg", "children5_image2.jpg"],
              description: "Stylish party shirt for kids",
              quantity: 30,
              rating: 4.5,
              promotionPercentage: 12,
              price: 100,
            },

            // Women
            {
              productId: 21,
              productName: "Hole Women 1",
              productType: "Women",
              productGroup: "Hat",
              productImages: ["Women/WomenTrad.png", "women1_image2.jpg"],
              description: "Stylish outfit for women",
              quantity: 60,
              rating: 4,
              promotionPercentage: 8,
              price: 120,
            },
            {
              productId: 22,
              productName: "Arvbark Women 2",
              productType: "Women",
              productGroup: "Arvbark",
              productImages: ["Women/WomenTrad.png", "women2_image2.jpg"],
              description: "Elegant traditional wear",
              quantity: 20,
              rating: 4.5,
              promotionPercentage: 10,
              price: 250,
            },
            {
              productId: 23,
              productName: "Trouser Women 3",
              productType: "Women",
              productGroup: "Skirt",
              productImages: ["Women/WomenTrad.png", "women3_image2.jpg"],
              description: "Comfortable trousers",
              quantity: 35,
              rating: 3,
              promotionPercentage: 5,
              price: 180,
            },
            {
              productId: 24,
              productName: "Skirt Women 4",
              productType: "Women",
              productGroup: "Skirt",
              productImages: ["Women/WomenTrad.png", "women4_image2.jpg"],
              description: "Chic office skirt",
              quantity: 25,
              rating: 4,
              promotionPercentage: 7,
              price: 150,
            },
            {
              productId: 25,
              productName: "Hat Women 5",
              productType: "Women",
              productGroup: "Skirt",
              productImages: ["Women/WomenTrad.png", "women5_image2.jpg"],
              description: "Fashionable summer hat",
              quantity: 10,
              rating: 4.5,
              promotionPercentage: 15,
              price: 90,
            },
            {
              productId: 26,
              productName: "Shirt Women 6",
              productType: "Women",
              productGroup: "Shirt",
              productImages: ["Women/WomenTrad.png", "women6_image2.jpg"],
              description: "Soft fabric shirt",
              quantity: 50,
              rating: 3,
              promotionPercentage: 5,
              price: 100,
            },
            {
              productId: 27,
              productName: "Traditional Dress Women 7",
              productType: "Women",
              productGroup: "Traditional Dress",
              productImages: ["Women/WomenTrad.png", "women7_image2.jpg"],
              description: "Cultural attire for events",
              quantity: 30,
              rating: 4,
              promotionPercentage: 10,
              price: 400,
            },
            {
              productId: 28,
              productName: "Hat Women 8",
              productType: "Women",
              productGroup: "Hat",
              productImages: ["Women/WomenTrad.png", "women8_image2.jpg"],
              description: "Elegant wide-brimmed hat",
              quantity: 20,
              rating: 4.5,
              promotionPercentage: 8,
              price: 130,
            },
            {
              productId: 29,
              productName: "Trouser Women 9",
              productType: "Women",
              productGroup: "Trouser",
              productImages: ["Women/WomenTrad.png", "women9_image2.jpg"],
              description: "High-waisted trousers",
              quantity: 45,
              rating: 3,
              promotionPercentage: 12,
              price: 210,
            },
            {
              productId: 30,
              productName: "Arvbark Women 10",
              productType: "Women",
              productGroup: "Arvbark",
              productImages: ["Women/WomenTrad.png", "women10_image2.jpg"],
              description: "Classic outfit",
              quantity: 15,
              rating: 4.5,
              promotionPercentage: 10,
              price: 300,
            },
          ]);
        }, 30);
      }).then((products) => (this.products = products));
    },
  },
});
