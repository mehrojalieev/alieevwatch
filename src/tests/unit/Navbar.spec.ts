// tests/unit/Navbar.spec.ts
import { mount } from '@vue/test-utils'
import Navbar from '../../layout/Navbar.vue' // Komponentingizning to'g'ri yo'lini yozing

describe('Navbar.vue', () => {
  // Navbar komponentini render qilish
  let wrapper: ReturnType<typeof mount>;

  beforeEach(() => {
    wrapper = mount(Navbar, {
      global: {
        stubs: ['RouterLink'], // Vue Router'ning RouterLink komponentini to'g'ridan-to'g'ri sinovda ishlatish o'rniga stubdan foydalanamiz
      }
    })
  })

  afterEach(() => {
    wrapper.unmount()
  })

  test('Matn to‘g‘ri render qilinganligini tekshirish', () => {
    expect(wrapper.text()).toContain('Home')
    expect(wrapper.text()).toContain('About')
    expect(wrapper.text()).toContain('Contact')
  })

  test('Navbar boshlang‘ich holatda ko‘rinadiganligini tekshirish', () => {
    const nav = wrapper.find('nav')
    expect(nav.attributes('style')).toContain('translateY(0)')
  })

  test('Navbarni sahifa pastga scroll qilinganda yashirish', async () => {
    // Scroll eventini simulyatsiya qilish
    window.scrollY = 100
    window.dispatchEvent(new Event('scroll'))

    await wrapper.vm.$nextTick() // DOM yangilanishini kutish

    const nav = wrapper.find('nav')
    expect(nav.attributes('style')).toContain('translateY(-100%)')
  })

  test('Sidebar tugmasini bosganda yon panel ochilishi va yopilishi', async () => {
    const sidebarButton = wrapper.find('.menu-btn')
    await sidebarButton.trigger('click')

    const sidebar = wrapper.find('.responsive__menu-sidebar')
    expect(sidebar.attributes('style')).toContain('translateX(0%)')

    // Sidebarni yopish uchun yana tugmani bosamiz
    await sidebarButton.trigger('click')
    expect(sidebar.attributes('style')).toContain('translateX(100%)')
  })

  test('Til tanlash dropdowni boshlang‘ich qiymatini tekshirish', () => {
    const select = wrapper.find('.language-select')
    expect((select.element as HTMLSelectElement).value).toBe('en')
  })

  test('Window o‘lchami o‘zgarganda sidebar holatini tekshirish', async () => {
    window.innerWidth = 800 // Qurilma ekran o‘lchamini simulyatsiya qilish
    window.dispatchEvent(new Event('resize'))

    await wrapper.vm.$nextTick()
    expect(wrapper.vm.closeSidebar).toBe(false) // Yangi o‘lchamda sidebar yopiq bo‘lishi kerak
  })
})
