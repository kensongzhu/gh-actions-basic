import { defineConfig } from 'tsdown'

export default defineConfig({
  dts: true,
  exports: true,
  attw: {
    enabled: 'ci-only',
    profile: 'esm-only',
  },
  clean: true,
})
