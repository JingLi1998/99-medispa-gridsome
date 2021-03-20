<template>
  <div class="grid">
    <!-- <v-background-image></v-background-image> -->
    <section class="title-section">
      <div class="title-text">
        <p class="tagline">{{ tagline }}</p>
        <h1>{{ heading }}</h1>
        <p class="subtitle">{{ subHeading }}</p>
      </div>
    </section>
    <section>
      <article>
        <p>{{ introduction }}</p>
        <iframe
          width="640"
          height="360"
          src="https://www.youtube.com/embed/q4b1hEGZiXo"
          title="YouTube video player"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowfullscreen
        ></iframe>
      </article>
      <hr />
      <article>
        <h2>{{ heading2 }}</h2>
        <p>{{ introduction2 }}</p>
        <h3>{{ step1Title }}</h3>
        <p>{{ step1Description }}</p>
        <h3>{{ step2Title }}</h3>
        <p>{{ step2Description }}</p>
        <h3>{{ step3Title }}</h3>
        <p>{{ step3Description }}</p>
        <h3>{{ step4Title }}</h3>
        <p>{{ step4Description }}</p>
        <g-image src="../../images/steps4d.jpg" width="640" />
      </article>
      <hr />
      <article>
        <h2>{{ heading3 }}</h2>
        <h3>{{ advantage1Title }}</h3>
        <p>{{ advantage1Description }}</p>
        <h3>{{ advantage2Title }}</h3>
        <p>{{ advantage2Description }}</p>
        <h3>{{ advantage3Title }}</h3>
        <p>{{ advantage3Description }}</p>
      </article>
      <hr />
      <article>
        <h2>{{ heading4 }}</h2>
        <h3>{{ question1 }}</h3>
        <p>{{ answer1 }}</p>
        <h3>{{ question2 }}</h3>
        <p>{{ answer2 }}</p>
        <h3>{{ question3 }}</h3>
        <p>{{ answer3 }}</p>
        <h3>{{ question4 }}</h3>
        <p>{{ answer4 }}</p>
        <h3>{{ question5 }}</h3>
        <p>{{ answer5 }}</p>
        <h3>{{ question6 }}</h3>
        <p>{{ answer6 }}</p>
      </article>
      <hr />
      <article>
        <h2>{{ heading5 }}</h2>
      </article>
    </section>
    <section>
      <h2>Enquiry Form</h2>
      <form @submit.prevent="submitForm">
        <div>
          <label for="fullName">Full Name</label>
          <input id="fullName" v-model="formData.name" type="text" />
        </div>
        <div>
          <label for="phone">Phone Number</label>
          <input id="phone" v-model="formData.phone" type="text" />
        </div>
        <div>
          <label for="fullName">Email Address</label>
          <input id="fullName" v-model="formData.email" type="text" />
        </div>
        <div>
          <label for="message"> Enquiry Message </label>
          <input id="message" v-model="formData.message" type="text" />
        </div>
        <transition name="fade" mode="in-out">
          <p v-if="error != ''" class="px-2 text-center text-red-400">
            {{ error }}
          </p>
        </transition>
        <button :disabled="disabled" type="submit">Submit Form</button>
      </form>
    </section>
  </div>
</template>

<script>
import VBackgroundImage from "../../components/VBackgroundImage";

export default {
  components: {
    VBackgroundImage,
  },
  data() {
    return {
      formData: {
        name: null,
        phone: null,
        email: null,
        message: null,
      },
      show: false,
      error: "",
      disabled: false,
      tagline: "Australia's non-invasive facelifting technologies",
      heading:
        "Sydney's FIRST Fotona 4D facelifting specialist located in Sydney CBD",
      subHeading:
        "Skin tightening, eye care, acne, & acne & acne scars removal, stretch marks and gynaecology",
      introduction: `99 Medispa in Sydney have over 20 years’ experience specialising in non-invasive facelifting
solutions. From Thermage FLX, Ultherapy to Fotona 4D, we have successfully performed
over 35,000 facelifting treatments since 2000 and received recognition from our clients.
99 Medispa uses TGA, FDA & CE certified and approved revolutionary new FOTONA SP
Dynamis Laser for our treatments. This is often known as “magical” treatments with NO
downtime and IMMEDIATE results. Fotona 4D is recommended 3-5 times for long lasting
results of up to a year.`,
      heading2: "What is Fotona 4D?",
      introduction2: `The 4D Skin Rejuvenation system uses a combination of the er:YAG and nd:YAG lasers to offer
combinations of various settings to stimulate your natural healing process and new collagen growth at
different levels of penetration. The fotona 4D involves in Step 1: SMOOTHLIFTIN™ Step 2:
FRAC3® Step 3: PIANO® and Step 4: SUPERFICIAL™.`,
      step1Title: "Step 1: SMOOTHLIFTIN™",
      step1Description:
        "This step starts around the walls of your mouth as most signs of aging starts around sagging mouth, loose jowls, deep nasolabial folds (fine lines) and loss of volume, tightness in lower half face. This step uses laser for oral tightening of the tissues, minimizing and correcting issues mentioned above. During this painless step, our technician will be using gloves to open your mouth wider for better access to the targeted areas. ",
      step2Title: "Step 2: FRAC3®",
      step2Description:
        "This step uses non-ablative mode to generate heat and targets deep lines, fine lines, sun damage and wrinkles. It helps to achieve smoother, more even skin tone to bring a youthful texture and complexion. ",
      step3Title: "Step 3: PIANO®",
      step3Description:
        "A brushing technique is used to regenerate skin’s lost structure, increase volume. This step provides maximum lifting and tightening, as well as firming. This step is especially beneficial for saggy jowls as our skin’s collagen decreases. ",
      step4Title: "Step 4: SUPERIFICIAL®",
      step4Description:
        "This last step is a light laser peel to improve appearances of surface-level imperfections such as acne scars, pores, uneven skin tone and more. This step offers a skin renewal and you will notice an immediately refreshed, tighter and glowy look! ",
      heading3: "Advantages of Fotona 4D",
      advantage1Title:
        "Tightening and volumization without the need for fillers or toxins",
      advantage1Description:
        "Fotona 4D is a natural treatment that promotes new collagen growth. As we age, our collagen growth slows down when we are in our late 20s and early 30s. other factors such as sun exposure causes our skin to loose its structure, tightness and gain fine lines and pigmentation. Whilst these outside factors damage our skin protein, fotona laser can give our skin an encouragement to COMBAT and CORRECT these issues.",
      advantage2Title:
        "A full lifting treatment from the inside out for Immediate tightening and glow, also beneficial for wrinkles and hyperpigmentation ",
      advantage2Description:
        "Fotona 4D is a 4 in 1 laser treatment, therefore is more economically WORTH IT than many other treatments that only target one benefit. When our body stops producing enough collagen, our skin will show signs of wear and tear in forms of wrinkles and pigmentation. This happens as our skin responds to our muscle contractions, causing indentations on our skin. Fotona 4D will increase our collagen levels and decrease these issues. if you do not have any wrinkles or pigmentation, fotona can PREVENT wrinkles and fine lines. ",
      advantage3Title: "Little or no downtime, surgery, needles or anesthesia",
      advantage3Description:
        "Fotona 4D is a revolutionary treatment due to its ability to allow clients to come during their lunch time breaks and carry on with daily activities as usual afterwards. It is quick, simple and effective. For clients who are worried of going out on the day of the treatment, do not worry, this will not be an issue!",
      heading4: "Frequently Asked Questions",
      question1: "How long does the treatment take?",
      answer1:
        "Fotona 4D is quick and simple. One basic Fotona 4D treatment will take approximately 30 – 45 mins depending on individual situations. Some Fotona treatments can last up to 1.5 hours as we customise this treatment depending on clients needs, making this 4D into 5D or 6D treatments. It is important to do a consultation before any Fotona treatments for a customised plan. ",
      question2: "Is this treatment safe?",
      answer2:
        "This treatment is very safe and effective for our skins. It works on all Fitzpatrick skin types. The treatment has no downtime and some clients only receive mild pinkness around cheeks that last for 30 minutes maximum. ",
      question3: "Does this treatment hurt?",
      answer3:
        "This treatment might have some warmth in certain areas on our faces but most patients do not report any pain or discomfort during treatment. After the treatment is done, clients usually feel warm on their face for 10 minutes maximum. ",
      question4: "How many sessions and how often will I need?",
      answer4:
        "Fotona 4D is a layering treatment, which means clients need 3-5 sessions for maximum results. With one session, clients can see a difference, but for tighter skin and longer lasting results, we always recommend more sessions. When you require 3-5 sessions, it will be spaced out with one session per month. During this journey, clients are recommended to use facial masks to keep skin hydrated. ",
      question5: "Which areas are included in the Fotona 4D treatment?",
      answer5:
        "The 4D treatment areas vary depend on your areas of concern. Our laser technician will give you a consultation and depending on your budget, it can be done on face and neck. Fotona can also do eyes but it is called SMOOTH EYES treatment. It is excluded from the 4D but can be added on upon discussion with your technician. Fotona TIGHTSCULPTING is another treatment that can be added onto the 4D, it is commonly called “fat melting” to help clients with double chins and loose jowls due to fat cells on face, causing faces to sag. ",
      question6: "What is the price range like in Sydney?",
      answer6:
        "Fotona 4D prices in Sydney range around $500 - $880 per session depending on which areas you choose. For SMOOTH EYES, it is usually $400 - $600 per session and for TIGHTSCULPTING, it will be roughly $600. If you are doing a Fotona session with all of the areas added on, discounts usually apply. ",
      heading5: "View our before and after photos",
    };
  },
  methods: {
    async submitForm() {
      if (
        this.formData.name &&
        this.formData.phone &&
        this.formData.email &&
        this.formData.message
      ) {
        this.error = "";
        this.disabled = true;
        try {
          await axios.post(
            "https://dicwjr8992.execute-api.ap-southeast-2.amazonaws.com/dev/email/send",
            this.formData
          );
          this.show = true;
          Object.keys(this.formData).forEach((k) => (this.formData[k] = ""));
          setTimeout(() => {
            this.show = false;
            this.disabled = false;
          }, 5000);
        } catch (error) {
          this.error = "Something went wrong, please try again";
          this.disabled = false;
        }
      } else {
        this.error = "Please fill in all required fields before submitting";
        this.disabled = false;
      }
    },
  },
};
</script>

<style lang="postcss" scoped>
.grid {
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-bottom: 3rem;
  line-height: 1.5;
}

h1 {
  font-size: 2rem;
  font-weight: 600;
}

h2 {
  font-size: 1.5rem;
  font-weight: 600;
}

h3 {
  font-size: 1.25rem;
  font-weight: 500;
}

section {
  width: 640px;
}

article {
  display: flex;
  flex-direction: column;
  gap: 1rem;
  margin: 2.25rem 0;
}

form {
  display: flex;
  flex-direction: column;
  gap: 1rem;
  margin: 1.5rem 0;
}

label {
  font-size: 0.875rem;
  font-weight: 500;
}

input {
  display: block;
  width: 100%;
  border-radius: 5px;
  border: 1px solid rgb(215, 224, 231);
  padding: 0.5rem;
  transition: all 0.3s ease-in-out;
}

input:focus {
  outline: none;
  box-shadow: 0 0 1.5px 1.5px rgba(211, 151, 112, 0.8);
}

button {
  background-color: rgba(211, 151, 112, 1);
  color: white;
  padding: 0.5rem 0;
  border-radius: 5px;
  transition: background-color 0.3s ease-in-out;
}

button:hover {
  background-color: rgba(211, 151, 112, 0.75);
}

.title-section {
  width: 100%;
  background-color: rgba(211, 151, 112, 1);
  color: rgba(255, 255, 255, 0.897);
  text-align: center;
  padding: 2.5rem 0;
}

.title-text {
  width: 640px;
  margin: auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1rem;
}

.subtitle,
.tagline {
  font-weight: 500;
  font-size: 1.25rem;
}
</style>
