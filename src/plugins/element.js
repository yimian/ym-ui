import Vue from 'vue';
import {
  Col, Row, Menu, Container,
  Submenu, Dropdown, DropdownMenu,
  DropdownItem, MenuItem, Tabs,
  TabPane, Input, Card,
  Form, FormItem, Select,
  Button, ButtonGroup, Table, TableColumn,
  Option, Upload, Dialog,
  Loading, Tag, Popover,
  RadioGroup, RadioButton, DatePicker,
  Switch, Cascader, Radio,
  CheckboxGroup, Checkbox, OptionGroup,
  Pagination, Alert, Tooltip,
  Message, MessageBox, Notification,
  Progress, TimePicker, MenuItemGroup,
  Collapse, CollapseItem,
  InputNumber, Steps, Step,
  Header, Badge, Main,
  Footer, Tree, Aside,
} from 'element-ui';
import ElementLocale from 'element-ui/lib/locale';
import zhLang from 'element-ui/lib/locale/lang/zh-CN';
import enLang from 'element-ui/lib/locale/lang/en';
import '../styles/element-variables.scss';
import i18n from '../i18n';

Vue.use(Col);
Vue.use(Header);
Vue.use(Row);
Vue.use(Menu);
Vue.use(Container);
Vue.use(MenuItem);
Vue.use(Submenu);
Vue.use(Dropdown);
Vue.use(DropdownItem);
Vue.use(DropdownMenu);
Vue.use(Tabs);
Vue.use(TabPane);
Vue.use(Input);
Vue.use(Card);
Vue.use(Form);
Vue.use(FormItem);
Vue.use(Select);
Vue.use(Button);
Vue.use(ButtonGroup);
Vue.use(Table);
Vue.use(TableColumn);
Vue.use(Option);
Vue.use(Upload);
Vue.use(Dialog);
Vue.use(Loading);
Vue.use(Tag);
Vue.use(Popover);
Vue.use(RadioGroup);
Vue.use(RadioButton);
Vue.use(DatePicker);
Vue.use(Switch);
Vue.use(Cascader);
Vue.use(Radio);
Vue.use(CheckboxGroup);
Vue.use(Checkbox);
Vue.use(OptionGroup);
Vue.use(Pagination);
Vue.use(Alert);
Vue.use(Tooltip);
Vue.use(Progress);
Vue.use(TimePicker);
Vue.use(MenuItemGroup);
Vue.use(Collapse);
Vue.use(CollapseItem);
Vue.use(InputNumber);
Vue.use(Steps);
Vue.use(Step);
Vue.use(Badge);
Vue.use(Main);
Vue.use(Footer);
Vue.use(Tree);
Vue.use(Aside);

Vue.prototype.$message = Message;
Vue.prototype.$msgbox = MessageBox;
Vue.prototype.$notify = Notification;
Vue.prototype.$locale = {
  use(lang) {
    i18n.locale = lang;
    ElementLocale.use(lang === 'zh-CN' ? zhLang : enLang);
    localStorage.setItem('YM-UI_LANGUAGE', lang);
  },
  current() {
    return i18n.locale;
  },
};

ElementLocale.i18n((key, value) => i18n.t(key, value));
