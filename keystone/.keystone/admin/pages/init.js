import { getInitPage } from '@keystone-6/auth/pages/InitPage';

const fieldPaths = ["username","email","password"];

export default getInitPage({"listKey":"User","fieldPaths":["username","email","password"],"enableWelcome":false});
