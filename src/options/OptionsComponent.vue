<template>
  <div class="options" :class="currentTheme">
    <div v-if="!showPrivacyPolicy">
      <div class="count-container">
        <p class="count-text">Day {{ count }}</p>
        <button @click="openModal" class="reset-button">Reset Streak</button>
      </div>
      <h1 class="main-banner">Aurelius </h1>
      <div class="content-container" :style="{ backgroundColor: currentTheme === 'light-theme' ? 'rgba(0, 0, 0, 0.05)' : 'rgba(255, 255, 255, 0.05)' }">
        <h2 class="banner">Support Resources</h2>
        <div class="tabs">
          <button v-for="(category, index) in uniqueCategories" 
                  :key="index" 
                  @click="activeTab = index"
                  @keydown.space.prevent="activeTab = index"
                  :class="{ active: activeTab === index }"
                  class="tab-button"
                  tabindex="0"
                  aria-label="Tab for {{ category }}">
            {{ category }}
          </button>
        </div>
        <div v-for="(category, index) in uniqueCategories" 
             :key="index" 
             v-show="activeTab === index"
             class="section">
          <h3>
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="icon">
              <path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71"></path>
              <path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71"></path>
            </svg>
            Websites
          </h3>
          <ul>
            <li v-for="(resource, resourceIndex) in getWebsiteResourcesForCategory(category)" :key="resourceIndex">
              <a :href="resource.url" target="_blank" rel="noopener noreferrer" class="resource-link main-banner-color" tabindex="0" aria-label="Link to {{ resource.name }}" @keydown.space.prevent="openLink(resource.url)">{{ resource.name }}</a>
              <p class="resource-description">{{ resource.description }}</p>
            </li>
          </ul>
          <h3>
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="#5865F2" class="icon">
              <path d="M20.317 4.3698a19.7913 19.7913 0 00-4.8851-1.5152.0741.0741 0 00-.0785.0371c-.211.3753-.4447.8648-.6083 1.2495-1.8447-.2762-3.68-.2762-5.4868 0-.1636-.3933-.4058-.8742-.6177-1.2495a.077.077 0 00-.0785-.037 19.7363 19.7363 0 00-4.8852 1.515.0699.0699 0 00-.0321.0277C.5334 9.0458-.319 13.5799.0992 18.0578a.0824.0824 0 00.0312.0561c2.0528 1.5076 4.0413 2.4228 5.9929 3.0294a.0777.0777 0 00.0842-.0276c.4616-.6304.8731-1.2952 1.226-1.9942a.076.076 0 00-.0416-.1057c-.6528-.2476-1.2743-.5495-1.8722-.8923a.077.077 0 01-.0076-.1277c.1258-.0943.2517-.1923.3718-.2914a.0743.0743 0 01.0776-.0105c3.9278 1.7933 8.18 1.7933 12.0614 0a.0739.0739 0 01.0785.0095c.1202.099.246.1981.3728.2924a.077.077 0 01-.0066.1276 12.2986 12.2986 0 01-1.873.8914.0766.0766 0 00-.0407.1067c.3604.698.7719 1.3628 1.225 1.9932a.076.076 0 00.0842.0286c1.961-.6067 3.9495-1.5219 6.0023-3.0294a.077.077 0 00.0313-.0552c.5004-5.177-.8382-9.6739-3.5485-13.6604a.061.061 0 00-.0312-.0286zM8.02 15.3312c-1.1825 0-2.1569-1.0857-2.1569-2.419 0-1.3332.9555-2.4189 2.157-2.4189 1.2108 0 2.1757 1.0952 2.1568 2.419 0 1.3332-.9555 2.4189-2.1569 2.4189zm7.9748 0c-1.1825 0-2.1569-1.0857-2.1569-2.419 0-1.3332.9554-2.4189 2.1569-2.4189 1.2108 0 2.1757 1.0952 2.1568 2.419 0 1.3332-.946 2.4189-2.1568 2.4189Z"/>
            </svg>
            Discord Servers
          </h3>
          <ul>
            <li v-for="(server, serverIndex) in getDiscordServersForCategory(category)" :key="serverIndex">
              <a :href="server.invite_link" target="_blank" rel="noopener noreferrer" class="resource-link main-banner-color" tabindex="0" aria-label="Link to {{ server.name }}" @keydown.space.prevent="openLink(server.invite_link)">{{ server.name }}</a>
              <p class="resource-description">{{ server.description }}</p>
            </li>
          </ul>
        </div>
      </div>
      <div v-if="showModal" class="modal-overlay" @click="closeModal">
        <div class="modal" @click.stop>
          <p class="modal-text">Are you sure you want to reset your streak?</p>
          <div class="modal-buttons">
            <button @click="resetCount" class="modal-button yes-button">Yes</button>
            <button @click="closeModal" class="modal-button no-button">No</button>
          </div>
        </div>
      </div>
    </div>
    <div v-else>
      <button @click="togglePrivacyPolicy" @keydown.space.prevent="togglePrivacyPolicy" class="back-button" tabindex="0" aria-label="Back to Support Resources">Back to Support Resources</button>
      <PrivacyPolicyComponent />
    </div>
    <footer class="footer">
      <button @click="toggleTheme" @keydown.space.prevent="toggleTheme" class="theme-button main-banner-color" tabindex="0" aria-label="Change Theme">Change Theme</button>
      <button @click="togglePrivacyPolicy" @keydown.space.prevent="togglePrivacyPolicy" class="privacy-link main-banner-color" tabindex="0" aria-label="Privacy Policy">Privacy Policy</button>
    </footer>
  </div>
</template>

<script>
import supportData from '../support/support.json';
import discordSupportData from '../support/discord_support.json';
import PrivacyPolicyComponent from './PrivacyPolicyComponent.vue';

export default {
  name: "OptionsComponent",
  components: {
    PrivacyPolicyComponent
  },
  data() {
    return {
      supportData: supportData,
      discordSupportData: discordSupportData,
      count: 0,
      activeTab: 0,
      showModal: false,
      showPrivacyPolicy: false,
      currentTheme: 'dark-theme'
    }
  },
  computed: {
    uniqueCategories() {
      const websiteCategories = this.supportData.addiction_support_guides.map(guide => guide.type);
      const discordCategories = this.discordSupportData.addiction_support_discord_servers.map(server => server.category);
      return [...new Set([...websiteCategories, ...discordCategories])];
    }
  },
  mounted() {
    this.loadCount();
    this.loadTheme();
    if (window.location.hash === '#privacyPolicy') {
      this.showPrivacyPolicy = true;
    }
  },
  methods: {
    loadCount() {
      const storedCount = localStorage.getItem('count');
      this.count = storedCount ? parseInt(storedCount) : 0;
    },
    resetCount() {
      this.count = 1;
      localStorage.setItem('count', '1');
      this.closeModal();
    },
    getWebsiteResourcesForCategory(category) {
      const guide = this.supportData.addiction_support_guides.find(guide => guide.type === category);
      return guide ? guide.resources : [];
    },
    getDiscordServersForCategory(category) {
      const serverCategory = this.discordSupportData.addiction_support_discord_servers.find(server => server.category === category);
      return serverCategory ? serverCategory.servers : [];
    },
    openModal() {
      this.showModal = true;
    },
    closeModal() {
      this.showModal = false;
    },
    togglePrivacyPolicy() {
      this.showPrivacyPolicy = !this.showPrivacyPolicy;
      if (this.showPrivacyPolicy) {
        window.location.hash = 'privacyPolicy';
      } else {
        window.location.hash = '';
      }
    },
    toggleTheme() {
      const themes = ['dark-theme', 'light-theme', 'ocean-theme', 'forest-theme'];
      const currentIndex = themes.indexOf(this.currentTheme);
      const nextIndex = (currentIndex + 1) % themes.length;
      this.currentTheme = themes[nextIndex];
      localStorage.setItem('theme', this.currentTheme);
      document.body.className = this.currentTheme;
    },
    loadTheme() {
      const storedTheme = localStorage.getItem('theme');
      if (storedTheme && ['dark-theme', 'light-theme', 'ocean-theme', 'forest-theme'].includes(storedTheme)) {
        this.currentTheme = storedTheme;
      } else {
        this.currentTheme = 'dark-theme';
      }
      document.body.className = this.currentTheme;
    },
    openLink(url) {
      if (window && window.open) {
        window.open(url, '_blank');
      }
    }
  }
}
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Poppins:wght@400;700&display=swap');
@import url('https://fonts.googleapis.com/css2?family=Noto+Sans:wght@400;700&display=swap');
@import '../style/themes.css';

.options {
  width: 100%;
  height: 100vh;
  margin: 0;
  padding: 20px;
  box-sizing: border-box;
  position: relative;
  display: flex;
  flex-direction: column;
  overflow: hidden;
}

.content-container {
  padding: 0rem 2rem;
  border-radius: 8px;
  margin-top: 2rem;
  flex-grow: 1;
  overflow-y: auto;
  overflow-x: hidden;
  background-color: rgba(255, 255, 255, 0.05);
}

.count-container {
  position: absolute;
  top: 20px;
  right: 20px;
   display: flex;
  flex-direction: column;
  align-items: flex-end;
}

.count-text {
  margin-bottom: 5px;
  font-size: 1.2em;
}

.reset-button {
  border: none;
  padding: 5px 10px;
  cursor: pointer;
  border-radius: 4px;
  margin-bottom: 1rem;
  transition: background-color 0.3s ease;
}

.reset-button:hover {
  background-color: var(--accent-light);
}

.main-banner {
  margin-bottom: 0.5rem;
  text-align: left;
  font-weight: 700 !important;
  font-size: 2em;
}

.banner {
  margin-bottom: 1rem;
  text-align: left;
  font-weight: 400 !important;
  font-family: 'Poppins', sans-serif;
  font-size: 1.5em;
}

.tabs {
  display: flex;
  justify-content: flex-start;
  margin-bottom: 20px;
  flex-wrap: wrap;
}

.tab-button {
  border: 1px solid var(--options-border);
  padding: 10px 20px;
  margin-right: 10px;
  margin-bottom: 10px;
  cursor: pointer;
  border-radius: 4px;
  font-family: 'Noto Sans', sans-serif;
}

.tab-button.active {
  background-color: var(--tab-active-bg);
  color: var(--tab-active-text);
}

.resource-link {
  text-decoration: none;
  font-family: 'Noto Sans', sans-serif;
  color: var(--main-banner-color);
}

.resource-link:hover {
  text-decoration: underline;
}

ul {
  list-style-type: none;
  padding-left: 0;
}

li {
  margin-bottom: 20px;
}

.resource-description {
  opacity: 0.7;
  margin-top: 5px;
  font-size: 0.9em;
  font-family: 'Noto Sans', sans-serif;
}

.section {
  margin-bottom: 30px;
}

.icon {
  vertical-align: middle;
  margin-right: 10px;
}

.modal-overlay {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
  backdrop-filter: blur(5px);
}

.modal {
  padding: 20px;
  border-radius: 8px;
  text-align: center;
  background-color: var(--bg-color);
}

.modal-text {
  font-family: 'Poppins', sans-serif;
}

.modal-buttons {
  display: flex;
  justify-content: center;
  margin-top: 20px;
}

.modal-button {
  margin: 0 10px;
  padding: 10px 20px;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  font-weight: bold;
}

.yes-button {
  background-color: var(--accent-color);
  color: var(--bg-color);
}

.no-button {
  background-color: var(--accent-dark);
  color: var(--bg-color);
}

.footer {
  display: flex;
  justify-content: space-between;
  padding: 10px 0;
  margin-top: auto;
}

.privacy-link, .theme-button {
  text-decoration: none;
  font-family: 'Noto Sans', sans-serif;
  font-size: 0.9em;
  background: none;
  border: none;
  cursor: pointer;
  color: var(--main-banner-color);
}

.privacy-link:hover, .theme-button:hover {
  text-decoration: underline;
}

.back-button {
  border: none;
  padding: 10px 20px;
  cursor: pointer;
  border-radius: 4px;
  margin-bottom: 20px;
  font-family: 'Noto Sans', sans-serif;
}

.back-button:hover {
  background-color: var(--accent-light);
}

</style>