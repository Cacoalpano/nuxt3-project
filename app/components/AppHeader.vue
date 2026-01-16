<template>
  <v-app-bar class="app-header" :height="60" :fixed="true" :elevation="12">
    <template v-slot:prepend>
      <v-app-bar-nav-icon @click="toggleDrawer()"></v-app-bar-nav-icon>
    </template>

    <template v-slot:default>
      <div class="d-flex justify-center">
        <span>NHSV</span>
      </div>
      <v-spacer></v-spacer>
      <div class="d-flex justify-center">
        <span>Test</span>
      </div>
      <v-spacer></v-spacer>
      <!-- Language Selector -->
      <v-menu>
        <template v-slot:activator="{ props }">
          <v-btn v-bind="props" icon variant="text">
            <v-img width="20" cover aspect-ratio="1/1" :src="currentLangIcon"></v-img>
            <v-tooltip activator="parent" location="bottom">
              {{ currentLangTitle }}
            </v-tooltip>
          </v-btn>
        </template>

        <v-list>
          <v-list-item v-for="lang in languages" :key="lang.value" :title="lang.title" 
            @click="switchLanguage(lang.value)" class="language-item">
            <template v-slot:prepend>
              <v-img width="20" cover aspect-ratio="1/1" :src="lang.icon" class="mr-3"></v-img>
            </template>
          </v-list-item>
        </v-list>
      </v-menu>
      <!-- Language Selector -->
      
      <!-- Theme Selector -->
      <v-menu>
        <template v-slot:activator="{ props }">
          <v-btn v-bind="props" icon variant="text">
            <v-icon size="small">{{ currentTheme === 'dark' ? 'mdi-moon-waning-crescent' : 'mdi-white-balance-sunny' }}</v-icon>
            <v-tooltip activator="parent" location="bottom">
              {{ $t(`theme.${currentTheme}`) }}
            </v-tooltip>
          </v-btn>
        </template>

        <v-list>
          <v-list-item v-for="theme in themes" :key="theme" :title="$t(`theme.${theme}`)" 
            @click="switchTheme(theme)" class="theme-item">
            <template v-slot:prepend>
              <v-icon size="small">{{ theme === 'dark' ? 'mdi-moon-waning-crescent' : 'mdi-white-balance-sunny' }}</v-icon>
            </template>
          </v-list-item>
        </v-list>
      </v-menu>
      <!-- Theme Selector -->

      <!-- Logout Button -->
      <v-btn icon variant="text" @click="handleLogout">
        <v-icon>mdi-power</v-icon>
        <v-tooltip activator="parent" location="bottom">
          {{ $t('logout') || 'Logout' }}
        </v-tooltip>
      </v-btn>
      <!-- Logout Button -->
    </template>

  </v-app-bar>
</template>

<script lang="ts" setup>
const emit = defineEmits(['toggle-drawer']);
const { locale } = useI18n();
const { $vuetify } = useNuxtApp();

const languages: Array<{ title: string, value: 'en' | 'vi' | 'zh' | 'ko', icon: string }> = [
  { title: 'English', value: 'en', icon: '/image/flags/en.png' },
  { title: 'Tiếng Việt', value: 'vi', icon: '/image/flags/vi.png' },
  { title: '中文', value: 'zh', icon: '/image/flags/zh.png' },
  { title: '한국어', value: 'ko', icon: '/image/flags/ko.png' }
];

const themes :string[] = ['light', 'dark'];

const currentLanguage = ref(locale.value);
const currentTheme = ref($vuetify.theme.global.name.value);

const currentLangIcon = computed(() => {
  return languages.find(lang => lang.value === currentLanguage.value)?.icon;
});
const currentLangTitle = computed(() => {
  return languages.find(lang => lang.value === currentLanguage.value)?.title;
});

const toggleDrawer = () => {
  emit('toggle-drawer');
};

const switchLanguage = (lang: 'en' | 'vi' | 'zh' | 'ko') => {
  locale.value = lang;
  currentLanguage.value = lang;
};

const switchTheme = (theme: string) => {
  $vuetify.theme.global.name.value = theme;
  currentTheme.value = theme;
};

const handleLogout = () => {
  // Add your logout logic here
  console.log('Logout clicked');
  // Example: navigateTo('/auth/login');
};

</script>

<style type="scss" scoped>
.language-item,
.theme-item {
  :deep(.v-list-item__prepend) {
    margin-right: 16px;
  }
}
</style>