<template>
  <div class="col panel-gray-danapay">
    <div class="row">
      <div class="col panel-title">
        <span class="text-title-danapay" style="text-align: center"
          >Aenean lobortis tempor metus, non accumsan erat pellentesque at</span
        ><span class="text-blue-title-danapay" style="text-align: center"
          >&nbsp;ln dapibus ut luctus ut</span
        ><span class="text-title-danapay">&nbsp;ltempus sit amet ex. </span>
      </div>
    </div>
    <div class="row">
      <div class="col panel-subtitle">
        <p class="text-subtitle-danapay">
          Nulla ultricies faucibus mi eu sagittis. Nam enim lorem, euismod eget
          metu.
        </p>
      </div>
    </div>
    <div class="row" style="margin-left: 10%; margin-right: 10%">
      <div
        v-for="(testimonial, index) in testimonials"
        :key="index"
        class="col col-md-4"
      >
        <div class="row">
          <div class="col testimonial-danapay">
            <div class="row">
              <div class="col testimonial-text-danapay">
                <p>
                  {{ testimonial.comment }}
                </p>
                <div class="row" style="margin-bottom: 20px">
                  <div class="col col-md-3">
                    <img :src="testimonial.image" class="testimonial-image" />
                  </div>
                  <div class="col col-md-6">
                    <div class="row">
                      <div class="col">
                        <span class="testimonial-name-danapay">
                          {{ testimonial.customer_name }}
                        </span>
                      </div>
                    </div>
                    <span class="testimonial-role-danapay">Consequat</span>
                  </div>
                  <div class="col col-md-2">
                    <img
                      src="/@/assets/img/Round-1.png"
                      style="width: 60px; height: 60px"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="row" style="text-align: center">
      <div class="col">
        <img src="/@/assets/img/trustpilot.png" style="margin-top: 20px" />
      </div>
    </div>
    <div class="row">
      <div class="col calltoaction-danapay">
        <button
          class="btn btn-primary btn-danapay-black"
          data-bs-hover-animate="pulse"
          type="button"
          style="height: 65px"
        >
          Quisque nisl dui, porta eget euismod eget
        </button>
      </div>
    </div>
  </div>
</template>

<script>
import { ref } from "vue";
export default {
  setup() {
    const testimonials = ref([
      {
        customer_name: "Lorem ipsum S.",
        comment:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis non ipsum porttitor mauris scelerisque vulputate sit amet eu lacus. Pellentesque pellentesque magna sed elit hendrerit...",
        image: "/@/assets/img/user1.jpg",
        video: "",
      },
      {
        customer_name: "Lorem ipsum K.",
        comment:
          "Sed scelerisque hendrerit ullamcorper. Maecenas id nibh dictum, rhoncus justo ut, hendrerit libero. Fusce euismod enim sed tempus suscipit...",
        image: "/@/assets/img/user2.jpg",
        video: "",
      },
      {
        customer_name: "Lorem ipsum M.",
        comment:
          "Ut accumsan convallis congue. Morbi luctus dui gravida, posuere nulla ac, tempor libero. Sed tincidunt leo eget dui sagittis, sit amet efficitur mauris egestas...",
        image: "/@/assets/img/user3.jpg",
        video: "",
      },
    ]);

    return {
      testimonials,
    };
  },
};
</script>

<style scoped>
.testimonial-image {
  width: 75px;
  height: 75px;
  border-top-left-radius: 100px;
  border-top-right-radius: 100px;
  border-bottom-right-radius: 100px;
  border-bottom-left-radius: 100px;
}
</style>