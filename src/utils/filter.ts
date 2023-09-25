// 处理OSS用户头像
const avatarOss = (avatar?: string): string => {
  if (!avatar) {
    return '';
  }

  const urlParam = 'x-oss-process=image/resize,m_fill,w_150,h_150,limit_0';
  if (!/^http/.test(avatar)) {
    return avatar;
  } else {
    const spl: string = /\?/.test(avatar) ? '&' : '?';

    return `${avatar}${spl}${urlParam}`;
  }
};

const install = (app) => {
  app.config.globalProperties.$avatarOss = avatarOss;
};

export default install;
