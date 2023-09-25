import { describe, test, expect, beforeAll } from 'vitest';
import { createPinia, setActivePinia } from 'pinia';
import { UserStore } from '@/store/modules/users';

describe('demo2', () => {
  let store: any;
  beforeAll(() => {
    setActivePinia(createPinia());
    store = UserStore();
  });

  test('token', () => {
    const { token } = store;
    expect(token).toBe('');
  });

  test('setToken', () => {
    const testToken = 'hello world';
    store.setToken(testToken);

    const { token } = store;
    expect(token).toBe(testToken);
  });

  test('setSourceApp', () => {
    store.setSourceApp();

    const { sourceApp } = store;
    expect(sourceApp).toBe(1);
  });
});
