import { describe, it, expect } from 'vitest';
import { mount } from '@vue/test-utils';
import WxOpenTips from '@/components/Tips/WxOpenTips.vue';

describe('WxOpenTips', () => {
  it('组件测试', async () => {
    const wrapper = mount(WxOpenTips, {
      data: () => {
        return {
          isShow: true,
        };
      },
    });

    expect(wrapper.find('.wx-open-tips').find('p').text()).toBe('1.点击右上角');
  });
});
