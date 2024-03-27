<template>
  <ClientOnly>
    <component
      v-if="CookieLaw"
      :is="CookieLaw"
      theme="dark-lime"
      v-on:accept="updateConsent(true)"
      v-on:decline="updateConsent(false)"
    >
      <template v-slot="props">
        <footer class="cookie-bar">
          <div>
            <p>
              We and selected third parties use cookies or similar technologies
              for technical purposes and, with your consent, for other purposes
              as specified in the
              <a
                href="https://www.iubenda.com/privacy-policy/59372271"
                class="text-privacy"
                target="_blank"
                >Privacy and Cookie Policy</a
              >.
            </p>
            <button
              class="button-footer"
              role="button"
              v-on:click="props.decline"
            >
              <span>Reject All</span>
            </button>
            <button
              class="button-footer"
              role="button"
              v-on:click="props.accept"
            >
              <span>Accept All</span>
            </button>
          </div>
        </footer>
      </template>
    </component>
  </ClientOnly>
</template>

<script>
/* global gtag */
export default {
  name: "Footer",
  data() {
    return {
      CookieLaw: null,
    };
  },
  mounted() {
    import("vue-cookie-law")
      .then((module) => {
        this.CookieLaw = module.default;
      })
      .catch((e) => {
        console.log(e); // eslint-disable-line no-console
      });
  },
  methods: {
    updateConsent(granted) {
      const consent = {
        ad_user_data: granted ? "granted" : "denied",
        ad_personalization: granted ? "granted" : "denied",
        ad_storage: granted ? "granted" : "denied",
        analytics_storage: granted ? "granted" : "denied",
      };

      try {
        if (typeof window !== "undefined") {
          gtag("consent", "update", consent);

          const now = new Date();

          const item = {
            ...consent,
            expiry: now.getTime() + 24 * 60 * 60 * 1000,
          };

          localStorage.setItem("consent", JSON.stringify(item));
        }
      } catch (e) {
        console.log(e.message);
        console.log(consent);
      }
    },
  },
};
</script>

<style>
.cookie-bar {
  width: 60vw;
  margin: 0 auto !important;

  .text-privacy {
    color: #3eaf7c;
    text-decoration: underline;
  }

  .button-footer {
    backface-visibility: hidden;
    background-color: #405cf5;
    border-radius: 6px;
    border-width: 0;
    box-shadow:
      rgba(50, 50, 93, 0.1) 0 0 0 1px inset,
      rgba(50, 50, 93, 0.1) 0 2px 5px 0,
      rgba(0, 0, 0, 0.07) 0 1px 1px 0;
    box-sizing: border-box;
    color: #fff;
    cursor: pointer;
    font-family: -apple-system, system-ui, "Segoe UI", Roboto, "Helvetica Neue",
      Ubuntu, sans-serif;
    font-size: 100%;
    height: 44px;
    line-height: 1.15;
    margin: 12px 0 0;
    outline: none;
    overflow: hidden;
    padding: 0 25px;
    position: relative;
    text-align: center;
    text-transform: none;
    transform: translateZ(0);
    transition:
      all 0.2s,
      box-shadow 0.08s ease-in;
    user-select: none;
    -webkit-user-select: none;
    touch-action: manipulation;
  }

  .button-footer:disabled {
    cursor: default;
  }

  .button-footer:focus {
    box-shadow:
      rgba(50, 50, 93, 0.1) 0 0 0 1px inset,
      rgba(50, 50, 93, 0.2) 0 6px 15px 0,
      rgba(0, 0, 0, 0.1) 0 2px 2px 0,
      rgba(50, 151, 211, 0.3) 0 0 0 4px;
  }
}
</style>
