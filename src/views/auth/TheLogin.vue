<template>
  <!-- Login -->
  <div class="login">
    <!-- Main Section -->
    <section class="login__main">
      <div class="login__main-form">
        <div style="width: 100%">
          <!-- Header -->
          <header class="login__main-formHeader">
            <!-- Logo -->
            <img
              style="height: 32px"
              src="@/assets/logo.svg"
              alt="Product Logo"
            >
            <!-- Language Switcher -->
            <base-langbar
              class="-mx-1"
              className="px-1 rounded-sm hover:bg-neutral-10"
              placement="bottom">
              <template v-slot:arrow>
                <div class="pl-1">
                  <ym-svg svg-name="chevron-down" class="w-4 h-4" />
                </div>
              </template>
            </base-langbar>
          </header>
        </div>
        <!-- Body -->
        <div style="width: 100%">
          <div class="login__main-formBody">
            <h1 class="login__main-formBodyTitle">
              {{ $t('common.loginN') }}
              <span v-if="showShortcuts">{{ $t('thirdPartyLogin.wechatLoginSlogan') }}</span>
            </h1>
            <!-- Log in with account and password -->
            <el-form v-if="!showShortcuts">
              <el-form-item>
                <el-input
                  v-model="form.username"
                  size="medium"
                  clearable
                  :placeholder="$t('common.username')"
                  @keyup.enter.native="login"
                />
              </el-form-item>
              <el-form-item>
                <el-input
                  v-model="form.password"
                  size="medium"
                  show-password
                  :placeholder="$t('common.password')"
                  type="password"
                  @keyup.enter.native="login"
                />
              </el-form-item>
              <el-form-item>
                <div class="login__main-submitBtnGroups">
                  <ym-button
                    type="text"
                    @click.native="redirectForgotPassword">
                    {{ $t('common.forgetPassword') }}
                  </ym-button>
                  <ym-button
                    class="login__main-submitBtn"
                    type="primary"
                    size="large"
                    :disabled="loginLoading"
                    @click.native="login"
                  >
                    {{ $t('common.login') }}
                    <i
                      v-if="loginLoading"
                      class="el-icon-loading"
                    ></i>
                  </ym-button>
                </div>
              </el-form-item>
            </el-form>
            <!-- Log in with another ways -->
            <div
              v-if="allowWechatLogin || showShortcuts"
              class="login__main-shortcuts"
            >
              <template v-if="showShortcuts">
                <ym-button
                  class="login-shortcut wechat"
                  size="large"
                  type="success"
                  :disabled="loginLoading"
                  @click.native="weChatLogin"
                >
                  <div class="login-shortcut__icon">
                    <ym-svg svg-name="wechat" />
                  </div>
                  {{ $t('common.loginWithWechat') }}
                </ym-button>
                <div style="text-align: right">
                  <ym-button
                    type="text"
                    @click.native="showShortcuts = false;"
                  >
                    {{ $t('common.firstAccountLogin') }}
                  </ym-button>
                </div>
              </template>

              <!-- Log in with wechat -->
              <template v-else-if="allowWechatLogin">
                <!-- Divider -->
                <div class="login__divider">
                  <div class="login__divider-line" />
                  <div class="login__divider-text">{{ $t('common.or') }}</div>
                  <div class="login__divider-line" />
                </div>
                <el-button
                  class="login-shortcut wechat"
                  size="large"
                  :disabled="loginLoading"
                  @click="weChatLogin"
                >
                  <div class="login-shortcut__icon">
                    <ym-svg svg-name="wechat" />
                  </div>
                  {{ $t('common.loginWithWechat') }}
                </el-button>
              </template>
            </div>
          </div>
        </div>
        <!-- Footer -->
        <footer class="login__main-footer">
          {{ $t('common.copyrightMessage', { currentYear }) }}
        </footer>
      </div>
    </section>
    <!-- Slogan & Images -->
    <section class="login__slogan">
      <div class="login__slogan-bg">
        <img
          src="@/assets/login-bg-common.png"
          alt="Background Image"
        >
      </div>
      <div class="login__slogan-text">
        <h1 class="login__slogan-textTitle">
          让决策更智能
        </h1>
        <p class="login__slogan-textDescr">为消费品企业提供全面、精准、实时的商业洞察和决策指导</p>
      </div>
    </section>

    <!-- Account Connection -->
    <div style="display: none" class="acConnect">
      <div class="acConnect__imgs">
        <div class="acConnect__imgs-item">
          <ym-svg
            svg-name="wechat"
            class-name="h-12 w-12 text-green-400"
          />
        </div>
        <!-- or use svg-injector -->
        <!-- https://github.com/iconfu/svg-inject -->
        <img
          class="acConnect__imgs-arrow"
          src="@/assets/arrows-horizontal.svg"
        >
        <div class="acConnect__imgs-item">
          <img
            width="48"
            src="@/assets/logomark.svg"
            alt="Logomark"
          >
        </div>
      </div>
      <div class="acConnect__text">
        <h1 class="acConnect__text-title">登录成功</h1>
        <p class="acConnect__text-descr">Yimian 将申请使用您的微信 vasttian 进行绑定，以便下次快捷登录</p>
      </div>
      <div class="acConnect__btns">
        <el-button
          class="acConnect__btns-item"
          size="medium"
          type="primary"
        >
          绑定
        </el-button>
        <div class="acConnect__btns-cancel">
          <el-button
            class="acConnect__btns-item"
            size="medium"
          >
            取消
          </el-button>
          <p class="acConnect__btns-cancelDescr">如需切换账号，请取消绑定并重新授权</p>
        </div>
      </div>
    </div>
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
      allowWechatLogin: true,
      showShortcuts: true,
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
