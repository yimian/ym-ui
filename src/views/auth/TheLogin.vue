<template>
  <div class="flex h-screen">
    <!-- Form -->
    <section class="flex-1 max-w-xl p-6 bg-white">
      <div class="flex flex-col justify-between max-w-sm h-full mx-auto">
        <header class="flex justify-between">
          <img class="h-8" src="@/assets/logo.svg" alt="Product Logo">
          <base-langbar/>
        </header>
        <el-form>
          <h1 class="mb-8 leading-snug text-4xl font-semibold text-netural-500">
            {{ $t('common.loginN') }}
          </h1>
          <!-- <p>Don’t have an account? <el-button type="text">Create your account</el-button></p> -->
          <el-form-item>
            <el-input
              size="medium"
              clearable
              :placeholder="$t('common.username')"
              v-model="form.username"
              @keyup.enter.native="login"
            ></el-input>
          </el-form-item>
          <el-form-item>
            <el-input
              size="medium"
              show-password
              :placeholder="$t('common.password')"
              v-model="form.password"
              type="password"
              @keyup.enter.native="login">
            </el-input>
          </el-form-item>
          <el-form-item class="mb-0">
            <div class="flex justify-between">
              <el-button
                type="text"
                @click="redirectForgotPassword">
                {{ $t('common.forgetPassword') }}
              </el-button>
              <el-button
                type="primary"
                size="medium"
                :disabled="loginLoading"
                @click="login">
                <ym-svg svgName="setting" className="w-5 h-5" />
                {{ $t('common.login') }}
                <i
                  v-if="loginLoading"
                  class="el-icon-loading"
                ></i>
              </el-button>
            </div>
          </el-form-item>
        </el-form>
        <footer class="text-center text-xs text-netural-70">
          {{ $t('common.copyrightMessage', { currentYear }) }}
        </footer>
      </div>
    </section>
    <!-- Slogan & Images -->
    <section class="hidden flex-1">
      <h1>让决策更智能</h1>
    </section>
  </div>
</template>

<script>
import { isMobile, isEmptyObject } from '@/utils/util';
import BaseLangbar from '@/components/widgets/BaseLangbar.vue';

export default {
  name: 'Login',
  components: {
    BaseLangbar,
  },
  data() {
    return {
      currentYear: (new Date()).getFullYear(),
      form: {
        username: 'general-demo',
        password: 'Ymdata123',
      },
      loginLoading: false,
      currentLang: this.$i18n.locale,
    };
  },
  computed: {
    isMobile() {
      return isMobile();
    },
  },
  created() {},
  methods: {
    login() {
      if (!this.form.password || !this.form.username) {
        return;
      }

      this.loginLoading = true;
      this.$auth.login(this.form).then(() => {
        try {
          this.$router.push({ name: 'Index' });
        } catch (err) {
          this.$router.push({ path: '/' });
        }
      }).catch((res) => {
        console.error('login failed', res);
        const { data } = res.data;
        const { reason } = res.data;

        if (!data || isEmptyObject(data)) {
          this.$message.error(this.$t(reason === 'not bind to current app'
            ? 'common.notBindApp' : 'common.invalid_password_username'));
          return;
        }

        const maxAttempts = data.login_max_attempts;
        const failedCount = data.login_failed_count;
        const enableLoginLock = data.enable_login_lock;
        const remainedCount = maxAttempts - failedCount;

        if (enableLoginLock && (reason !== 'invalid login or password'
          || (maxAttempts && maxAttempts <= failedCount))) {
          this.$message.error(this.$t('common.account_is_locked'));
        } else if (enableLoginLock && maxAttempts && failedCount !== null && failedCount <= maxAttempts) {
          if (this.$locale.current() === 'en' && remainedCount === 1) {
            this.$message.error('Invalid Username or Password. last login Remained.');
          } else {
            this.$message.error(this.$t('common.invalid_password_username_number', { number: remainedCount }));
          }
        } else {
          this.$message.error(this.$t('common.invalid_password_username'));
        }
      }).finally(() => {
        this.loginLoading = false;
      });
    },
    redirectForgotPassword() {
      window.open(`${process.env.VUE_APP_HAMLET_URL}/forgot_password?app_key=${process.env.VUE_APP_APP_KEY}&callback_url=${document.location.href}`);
    },
  },
};
</script>

<style lang="scss">
</style>
