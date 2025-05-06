import Analytics from '@pages/dashboards/analytics'
import CRM from '@pages/dashboards/crm'
import DashboardsPage from '@pages/dashboards/ecommerce'
import Email from '@pages/dashboards/email'
import FileManager from '@pages/dashboards/fileManager'
import Hospital from '@pages/dashboards/hospital'
import Music from '@pages/dashboards/music'
import Projects from '@pages/dashboards/projects'
import School from '@pages/dashboards/school'
import Doctors from '@pages/landing/doctors'
import Ecommerce from '@pages/landing/ecommerce'
import Invoice from '@pages/landing/invoice'
import SchoolLanding from '@pages/landing/school'
import Accodion from '@pages/ui/accordion'
import AdvancedEffect from '@pages/ui/advanced3dEffect'
import AdvancedAnimation from '@pages/ui/advancedAnimation'
import Boat from '@pages/ui/advancedBot'
import Highlight from '@pages/ui/advancedHighlight'
import ImageAnnotation from '@pages/ui/advancedImageAnnotation'
import Mask from '@pages/ui/advancedMask'
import Simplebar from '@pages/ui/advancedSimplebar'
import SwiperElement from '@pages/ui/advancedSwiper'
import Tree from '@pages/ui/advancedTree'
import WordCounters from '@pages/ui/advancedWordCounter'
import Alerts from '@pages/ui/alerts'
import Badge from '@pages/ui/badge'
import BreadCrumbs from '@pages/ui/breadCrumb'
import ButtonNavigation from '@pages/ui/buttonNavigation'
import Button from '@pages/ui/buttons'
import ButtonsGroup from '@pages/ui/buttonsGroup'
import Cards from '@pages/ui/cards'
import Colors from '@pages/ui/colors'
import Cookies from '@pages/ui/cookie'
import Drawer from '@pages/ui/drawer'
import Dropdowns from '@pages/ui/dropdown'
import Gallerys from '@pages/ui/gallery'
import Links from '@pages/ui/links'
import ListGroups from '@pages/ui/listGroup'
import Loader from '@pages/ui/loader'
import Modals from '@pages/ui/modal'
import Notifications from '@pages/ui/notification'
import Paginations from '@pages/ui/pagination'
import ProgressBars from '@pages/ui/progressBar'
import Tabs from '@pages/ui/tabs'
import TimeLine from '@pages/ui/timeLine'
import Tooltips from '@pages/ui/toolTips'
import Typographys from '@pages/ui/typography'
import Videos from '@pages/ui/video'
import DefaultCalendar from '@src/pages/apps/calendar/default'
import CalendarLocalize from '@src/pages/apps/calendar/localize'
import DefaultChat from '@src/pages/apps/chat/default'
import Group from '@src/pages/apps/chat/group'
import Video from '@src/pages/apps/chat/video'
// import CategoryList from '@src/pages/apps/ecommerce/category'
import OrderList from '@src/pages/apps/ecommerce/orders/list'
import CreateProduct from '@src/pages/apps/ecommerce/products/create-products'
import ProductGrid from '@src/pages/apps/ecommerce/products/grid'
import List from '@src/pages/apps/ecommerce/products/list'
import ProductOverview from '@src/pages/apps/ecommerce/products/overview'
import EmailNewsletter from '@src/pages/apps/email/templates/newsletter'
import EmailWelcome from '@src/pages/apps/email/templates/welcome'
import MailBox from '@src/pages/apps/mailbox'
import Boxicon from '@src/pages/icons/boxicon'
import Heroiocns from '@src/pages/icons/heroicons'
import LineAwesome from '@src/pages/icons/lineAwesome'
import Lucide from '@src/pages/icons/lucide'
import Remix from '@src/pages/icons/remix'
import EmailLanding from '@src/pages/landing/email'
import Avatar from '@src/pages/ui/avatar/page'

import AreaCharts from '../pages/apexchart/area'
import BarCharts from '../pages/apexchart/bar'
import BoxWhisker from '../pages/apexchart/boxWhisker'
import BubbleChart from '../pages/apexchart/bubble'
import CandlestickCharts from '../pages/apexchart/candlestick'
import ColumnCharts from '../pages/apexchart/column'
import FunnelCharts from '../pages/apexchart/funnel'
import HeatmapCharts from '../pages/apexchart/heatmap'
import LineCharts from '../pages/apexchart/line'
import MixedCharts from '../pages/apexchart/mixed'
import PieChart from '../pages/apexchart/pie'
import PolarAreaCharts from '../pages/apexchart/polar-area'
import RadarCharts from '../pages/apexchart/radar'
import RadialBarCharts from '../pages/apexchart/radialbar'
import RangeAreaCharts from '../pages/apexchart/rangeArea'
import ScatterCharts from '../pages/apexchart/scatter'
import SlopeCharts from '../pages/apexchart/slope'
import TimelineChart from '../pages/apexchart/timeline'
import TreeMapCharts from '../pages/apexchart/treemap'
import ApexSankeyChart from '../pages/apexsankey'
import ApexTreeBottomTopChart from '../pages/apextree/bottomTop'
import ApexTreeCollapseExpandChart from '../pages/apextree/collapseExpand'
import ApexTreeLeftRightChart from '../pages/apextree/leftRight'
import ApexTreeRightLeftChart from '../pages/apextree/rightLeft'
import ApexTreeTopBottomChart from '../pages/apextree/topBottom'
import CalendarDateClicking from '../pages/apps/calendar/dateClicking'
import CalendarDateNavLink from '../pages/apps/calendar/dateNavLink'
import CalendarDayView from '../pages/apps/calendar/dayview'
import CalendarListView from '../pages/apps/calendar/listview'
import CalendarMultiMonthGrid from '../pages/apps/calendar/multiMonthGrid'
import CalendarMultiMonthStack from '../pages/apps/calendar/multiMonthStack'
import CalendarTimeGrid from '../pages/apps/calendar/timegrid'
import CalendarTimeLine from '../pages/apps/calendar/timeline'
import CalendarWeekNumber from '../pages/apps/calendar/weekNumber'
import CrmContact from '../pages/apps/crm/contact'
import CrmDeal from '../pages/apps/crm/deal'
import CrmLead from '../pages/apps/crm/lead'
import Checkout from '../pages/apps/ecommerce/checkout'
import CustomerList from '../pages/apps/ecommerce/customer/list'
import User from '../pages/apps/ecommerce/customer/user'
import ManageReviews from '../pages/apps/ecommerce/manageReviews'
import OrderOverview from '../pages/apps/ecommerce/orders/overview'
import OrderTrack from '../pages/apps/ecommerce/orders/track'
import Payment from '../pages/apps/ecommerce/payment'
import ShopCart from '../pages/apps/ecommerce/shopCart'
import WishList from '../pages/apps/ecommerce/wishlist'
import GridList from '../pages/apps/events/grid'
import EventList from '../pages/apps/events/list'
import EventOverview from '../pages/apps/events/overview'
import FileManagerApp from '../pages/apps/fileManager'
import AppointmentsBook from '../pages/apps/hospital/appointments-book'
import AppointmentsLists from '../pages/apps/hospital/appointments-lists'
import Departments from '../pages/apps/hospital/departments'
import DoctorSchedule from '../pages/apps/hospital/doctorSchedule'
import PatientsCreate from '../pages/apps/hospital/patientsCreate'
import PatientsLists from '../pages/apps/hospital/patientsLists'
import PatientsOverview from '../pages/apps/hospital/patientsOverview'
import PayrollEmployeeSalary from '../pages/apps/hospital/payrollEmployeeSalary'
import PayrollPayslip from '../pages/apps/hospital/payrollPayslip'
import StaffAttendance from '../pages/apps/hospital/staffAttendance'
import StaffHolidays from '../pages/apps/hospital/staffHolidays'
import StaffLeaveAdd from '../pages/apps/hospital/staffLeaveAdd'
import StaffLeave from '../pages/apps/hospital/staffLeaves'
import StaffLists from '../pages/apps/hospital/staffLists'
import InvoiceCreate from '../pages/apps/invoice/create'
import GridInvoice from '../pages/apps/invoice/grid'
import ListInvoice from '../pages/apps/invoice/list'
import Overview1 from '../pages/apps/invoice/overview_1'
import Overview2 from '../pages/apps/invoice/overview_2'
import ProjectsFiles from '../pages/apps/projects/files'
import ProjectsGrid from '../pages/apps/projects/grid'
import ProjectsLists from '../pages/apps/projects/list'
import ProjectsOverview from '../pages/apps/projects/overview'
import ProjectsRoadMap from '../pages/apps/projects/roadmap'
import ProjectsTask from '../pages/apps/projects/task'
import ProjectsUsers from '../pages/apps/projects/users'
import StudentsAttendances from '../pages/apps/school/attendanceStudents'
import QuestionExam from '../pages/apps/school/examQuestion'
import ExamSchedule from '../pages/apps/school/examSchedule'
import LibraryBook from '../pages/apps/school/libraryBook'
import Parents from '../pages/apps/school/parents'
import StudentsList from '../pages/apps/school/studentList'
import StudentsAdmission from '../pages/apps/school/studentsAdmission'
import StudentsOverview from '../pages/apps/school/studentsOverview'
import TeachersList from '../pages/apps/school/teachersList'
import TeachersOverview from '../pages/apps/school/teachersOverview'
import TeachersPayroll from '../pages/apps/school/teachersPayroll'
import AccountDeactivationBasicPage from '../pages/auth/accountDeactivationBasic'
import AccountDeactivationCreativePage from '../pages/auth/accountDeactivationCreative'
import AccountDeactivationModernPage from '../pages/auth/accountDeactivationModern'
import ForgotPasswordBasicPage from '../pages/auth/forgotPasswordBasic'
import ForgotPasswordCreativePage from '../pages/auth/forgotPasswordCreative'
import ForgotPasswordModernPage from '../pages/auth/forgotPasswordModern'
import ResetPasswordBasicPage from '../pages/auth/resetPasswordBasic'
import ResetPasswordCreativePage from '../pages/auth/resetPasswordCreative'
import ResetPasswordModernPage from '../pages/auth/resetPasswordModern'
import SignInBasicPage from '../pages/auth/signinBasic'
import SignInCreativePage from '../pages/auth/signinCreative'
import SignInModernPage from '../pages/auth/signinModern'
import SignUpBasicPage from '../pages/auth/signupBasic'
import SignUpCreativePage from '../pages/auth/signupCreative'
import SignUpModernPage from '../pages/auth/signupModern'
import SuccessfulPasswordBasicPage from '../pages/auth/successfulPasswordBasic'
import SuccessfulPasswordCreativePage from '../pages/auth/successfulPasswordCreative'
import SuccessfulPasswordModernPage from '../pages/auth/successfulPasswordModern'
import TwoStepVerificationBasicPage from '../pages/auth/twoStepVerificationBasic'
import TwoStepVerificationCreativePage from '../pages/auth/twoStepVerificationCreative'
import TwoStepVerificationModernPage from '../pages/auth/twoStepVerificationModern'
import BarEcharts from '../pages/echart/bar'
import LineECharts from '../pages/echart/line'
import PieECharts from '../pages/echart/pie'
import Autosize from '../pages/form/autosize'
import BasicInput from '../pages/form/basic-input'
import CheckboxRadio from '../pages/form/checkbox-radio'
import Clipboards from '../pages/form/clipboard'
import FileInput from '../pages/form/file-input'
import InputGroup from '../pages/form/input-group'
import InputSpin from '../pages/form/input-spin'
import Pickers from '../pages/form/pickers'
import Range from '../pages/form/range'
import Recaptcha from '../pages/form/recaptcha'
import SelectPage from '../pages/form/select'
import Switches from '../pages/form/switches'
import WizardBasic from '../pages/form/wizard-basic'
import MapComponent from '../pages/maps/google'
import VectorMaps from '../pages/maps/vector'
import PageNotFoundError from '../pages/page/404'
import FiveZero from '../pages/page/500'
import AccountBillingPlan from '../pages/page/accountBillingPlan'
import AccountLogs from '../pages/page/accountLogs'
import AccountNotification from '../pages/page/accountNotification'
import AccountSecurity from '../pages/page/accountSecurity'
import AccountSettings from '../pages/page/accountSettings'
import AccountStatements from '../pages/page/accountStatements'
import ComingSoon from '../pages/page/comingSoon'
import ContactUs from '../pages/page/contactUs'
import ContactUsFive from '../pages/page/contactUsFive'
import ContactUsFour from '../pages/page/contactUsFour'
import ContactUsThree from '../pages/page/contactUsThree'
import ContactUsTwo from '../pages/page/contactUsTwo'
import Faq from '../pages/page/faq'
import HelpCenter from '../pages/page/helpCenter'
import Licenses from '../pages/page/licenses'
import Maintenance from '../pages/page/maintenance'
import PricingPage from '../pages/page/pricing'
import PricingAdmin from '../pages/page/pricingAdmin'
import PrivacyPolicy from '../pages/page/privacyPolicy'
import Starter from '../pages/page/starter'
import UserPage from '../pages/page/user'
import UserActivity from '../pages/page/userActivity'
import UserDocuments from '../pages/page/userDocuments'
import UserFollowers from '../pages/page/userFollowers'
import UserNotes from '../pages/page/userNotes'
import UserProjects from '../pages/page/userProjects'
import BaseTables from '../pages/table/base'
import BasicTables from '../pages/table/datatables/basic'
import Bordered from '../pages/table/datatables/bordered'
import EnableDisable from '../pages/table/datatables/enableDisable'
import Hover from '../pages/table/datatables/hover'
import RowGrouPing from '../pages/table/datatables/rowGrouping'
import Stripe from '../pages/table/datatables/stripe'
import WidgetsBanners from '../pages/widgets/banners'
import WidgetsCard from '../pages/widgets/cards'
import WidgetsCharts from '../pages/widgets/charts'
import WidgetsData from '../pages/widgets/widgetsData'

// Purchase Order
import PurchaseOrderList from '@src/pages/transactions/purchaseOrders/list'

// Sales Order
import SalesOrderList from '@src/pages/transactions/salesOrders/list'

// Products
import ProductList from '@src/pages/masterData/products/list'

// Material
import MaterialList from '@src/pages/masterData/materials/list'

// Inventory
import InventoryList from '@src/pages/masterData/inventory/list'

// Stock
import StockList from '@src/pages/masterData/stock/list'

// Payment Method
import PaymentMethodList from '@src/pages/masterData/paymentMethod/list'

// Unit
import UnitList from '@src/pages/masterData/unit/list'

// Category
import CategoryList from '@src/pages/masterData/category/list'

// Cost Of Goods Sold
import CostOfGoodsSoldList from '@src/pages/masterData/costOfGoodsSold/list'

// User
import UserList from '@src/pages/masterData/user/index-user'
import UserCreate from '@src/pages/masterData/user/create-user'

const routes = [
  //dashboards
  { path: '/', component: <DashboardsPage /> },
  { path: '/dashboards/analytics', component: <Analytics /> },
  { path: '/dashboards/ecommerce', component: <DashboardsPage /> },
  { path: '/dashboards/email', component: <Email /> },
  { path: '/dashboards/hospital', component: <Hospital /> },
  { path: '/dashboards/file-manager', component: <FileManager /> },
  { path: '/dashboards/projects', component: <Projects /> },
  { path: '/dashboards/school', component: <School /> },
  { path: '/dashboards/music', component: <Music /> },

  // transaction
  { path: '/transaction/purchase-order/list', component: <PurchaseOrderList /> },
  { path: '/transaction/sales-order/list', component: <SalesOrderList /> },
  
  // master data
  { path: '/master-data/product', component: <ProductList /> },
  { path: '/master-data/material', component: <MaterialList /> },
  { path: '/master-data/inventory', component: <InventoryList /> },
  { path: '/master-data/stock', component: <StockList /> },
  { path: '/master-data/payment-method', component: <PaymentMethodList /> },
  { path: '/master-data/unit', component: <UnitList /> },
  { path: '/master-data/category', component: <CategoryList /> },
  { path: '/master-data/cost-of-goods-sold', component: <CostOfGoodsSoldList /> },

  // User
  { path: '/master-data/user', component: <UserList /> },
  { path: '/master-data/user/create-user', component: <UserCreate /> },

  //   // apps
  { path: '/apps/chat/default', component: <DefaultChat /> },
  { path: '/apps/chat/group', component: <Group /> },
  { path: '/apps/chat/video', component: <Video /> },
  { path: '/apps/mailbox', component: <MailBox /> },
  { path: '/apps/email/templates/welcome', component: <EmailWelcome /> },
  { path: '/apps/email/templates/newsletter', component: <EmailNewsletter /> },
  { path: '/apps/ecommerce/products/list', component: <List /> },
  { path: '/apps/ecommerce/products/grid', component: <ProductGrid /> },
  {
    path: '/apps/ecommerce/products/create-products',
    component: <CreateProduct />,
  },
  { path: '/apps/ecommerce/products/overview', component: <ProductOverview /> },
  { path: '/apps/ecommerce/category', component: <CategoryList /> },
  { path: '/apps/ecommerce/orders/list', component: <OrderList /> },
  { path: '/apps/ecommerce/orders/overview', component: <OrderOverview /> },
  { path: '/apps/ecommerce/orders/track', component: <OrderTrack /> },
  { path: '/apps/ecommerce/customer/list', component: <CustomerList /> },
  { path: '/apps/ecommerce/customer/user', component: <User /> },
  { path: '/apps/ecommerce/shop-cart', component: <ShopCart /> },
  { path: '/apps/ecommerce/checkout', component: <Checkout /> },
  { path: '/apps/ecommerce/wishlist', component: <WishList /> },
  { path: '/apps/ecommerce/payment', component: <Payment /> },
  { path: '/apps/ecommerce/manage-reviews', component: <ManageReviews /> },
  { path: '/apps/file-manager', component: <FileManagerApp /> },
  { path: '/apps/projects/list', component: <ProjectsLists /> },
  { path: '/apps/projects/grid', component: <ProjectsGrid /> },
  { path: '/apps/projects/overview', component: <ProjectsOverview /> },
  { path: '/apps/projects/roadmap', component: <ProjectsRoadMap /> },
  { path: '/apps/projects/task', component: <ProjectsTask /> },
  { path: '/apps/projects/files', component: <ProjectsFiles /> },
  { path: '/apps/projects/users', component: <ProjectsUsers /> },

  { path: '/apps/invoice/list', component: <ListInvoice /> },
  { path: '/apps/invoice/grid', component: <GridInvoice /> },
  { path: '/apps/invoice/create', component: <InvoiceCreate /> },
  { path: '/apps/invoice/overview-1', component: <Overview1 /> },
  { path: '/apps/invoice/overview-2', component: <Overview2 /> },

  { path: '/apps/crm/lead', component: <CrmLead /> },
  { path: '/apps/crm/contact', component: <CrmContact /> },
  { path: '/apps/crm/deal', component: <CrmDeal /> },
  { path: '/apps/events/list', component: <EventList /> },
  { path: '/apps/events/grid', component: <GridList /> },
  { path: '/apps/events/overview', component: <EventOverview /> },

  // hodpital
  { path: '/apps/hospital/patients-lists', component: <PatientsLists /> },
  { path: '/apps/hospital/patients-create', component: <PatientsCreate /> },
  { path: '/apps/hospital/patients-overview', component: <PatientsOverview /> },
  { path: '/apps/hospital/staff-lists', component: <StaffLists /> },
  { path: '/apps/hospital/staff-leaves', component: <StaffLeave /> },
  { path: '/apps/hospital/staff-leave-add', component: <StaffLeaveAdd /> },
  { path: '/apps/hospital/staff-holidays', component: <StaffHolidays /> },
  { path: '/apps/hospital/staff-attendance', component: <StaffAttendance /> },
  {
    path: '/apps/hospital/appointments-lists',
    component: <AppointmentsLists />,
  },
  { path: '/apps/hospital/appointments-book', component: <AppointmentsBook /> },
  { path: '/apps/hospital/doctor-schedule', component: <DoctorSchedule /> },
  { path: '/apps/hospital/departments', component: <Departments /> },
  {
    path: '/apps/hospital/payroll-employee-salary',
    component: <PayrollEmployeeSalary />,
  },
  { path: '/apps/hospital/payroll-payslip', component: <PayrollPayslip /> },

  // calendar
  { path: '/apps/calendar/weeknumber', component: <CalendarWeekNumber /> },
  { path: '/apps/calendar/date-clicking', component: <CalendarDateClicking /> },
  { path: '/apps/calendar/date-nav-link', component: <CalendarDateNavLink /> },
  { path: '/apps/calendar/dayview', component: <CalendarDayView /> },
  { path: '/apps/calendar/listview', component: <CalendarListView /> },
  { path: '/apps/calendar/timegrid', component: <CalendarTimeGrid /> },
  { path: '/apps/calendar/localize', component: <CalendarLocalize /> },
  {
    path: '/apps/calendar/multi-month-stack',
    component: <CalendarMultiMonthStack />,
  },
  {
    path: '/apps/calendar/multi-month-grid',
    component: <CalendarMultiMonthGrid />,
  },
  { path: '/apps/calendar/timeline', component: <CalendarTimeLine /> },
  { path: '/apps/calendar/default', component: <DefaultCalendar /> },

  // school
  { path: '/apps/school/exam-schedule', component: <ExamSchedule /> },
  { path: '/apps/school/exam-question', component: <QuestionExam /> },
  { path: '/apps/school/students-list', component: <StudentsList /> },
  { path: '/apps/school/students-overview', component: <StudentsOverview /> },
  { path: '/apps/school/students-admission', component: <StudentsAdmission /> },
  { path: '/apps/school/teachers-list', component: <TeachersList /> },
  { path: '/apps/school/teachers-overview', component: <TeachersOverview /> },
  { path: '/apps/school/teachers-payroll', component: <TeachersPayroll /> },
  { path: '/apps/school/parents', component: <Parents /> },
  { path: '/apps/school/library-book', component: <LibraryBook /> },
  {
    path: '/apps/school/attendances-students',
    component: <StudentsAttendances />,
  },
  //   // forms
  { path: '/form/basic-input', component: <BasicInput /> },
  { path: '/form/input-group', component: <InputGroup /> },
  { path: '/form/file-input', component: <FileInput /> },
  { path: '/form/select', component: <SelectPage /> },
  { path: '/form/pickers', component: <Pickers /> },
  { path: '/form/range', component: <Range /> },
  { path: '/form/switches', component: <Switches /> },
  { path: '/form/checkbox-radio', component: <CheckboxRadio /> },
  { path: '/form/input-spin', component: <InputSpin /> },
  { path: '/form/recaptcha', component: <Recaptcha /> },
  { path: '/form/autosize', component: <Autosize /> },
  { path: '/form/clipboard', component: <Clipboards /> },
  { path: 'form/wizard-basic', component: <WizardBasic /> },

  //   //tables
  { path: '/table/base', component: <BaseTables /> },
  { path: '/table/datatables/basic', component: <BasicTables /> },
  { path: '/table/datatables/bordered', component: <Bordered /> },
  { path: '/table/datatables/stripe', component: <Stripe /> },
  { path: '/table/datatables/hover', component: <Hover /> },
  { path: '/table/datatables/row-grouping', component: <RowGrouPing /> },
  { path: '/table/datatables/enable-disable', component: <EnableDisable /> },

  //   // ui elements
  { path: '/ui/accordion', component: <Accodion /> },
  { path: '/ui/alerts', component: <Alerts /> },
  { path: '/ui/avatar', component: <Avatar /> },

  { path: '/ui/badge', component: <Badge /> },
  { path: '/ui/breadcrumb', component: <BreadCrumbs /> },
  { path: '/ui/buttons-group', component: <ButtonsGroup /> },
  { path: '/ui/buttons', component: <Button /> },
  { path: '/ui/button-navigation', component: <ButtonNavigation /> },
  { path: '/ui/cards', component: <Cards /> },
  { path: '/ui/colors', component: <Colors /> },
  { path: '/ui/cookie', component: <Cookies /> },
  { path: '/ui/drawer', component: <Drawer /> },
  { path: '/ui/dropdown', component: <Dropdowns /> },
  { path: '/ui/gallery', component: <Gallerys /> },
  { path: '/ui/links', component: <Links /> },
  { path: '/ui/list-group', component: <ListGroups /> },
  { path: '/ui/loader', component: <Loader /> },
  { path: '/ui/modal', component: <Modals /> },
  { path: '/ui/notification', component: <Notifications /> },
  { path: '/ui/pagination', component: <Paginations /> },
  { path: '/ui/progress-bar', component: <ProgressBars /> },
  { path: '/ui/tabs', component: <Tabs /> },
  { path: '/ui/timeline', component: <TimeLine /> },
  { path: '/ui/tooltips', component: <Tooltips /> },
  { path: '/ui/typography', component: <Typographys /> },
  { path: '/ui/video', component: <Videos /> },

  //   // advanced ui
  { path: '/ui/advanced-3d-effect', component: <AdvancedEffect /> },
  { path: '/ui/advanced-animation', component: <AdvancedAnimation /> },
  { path: '/ui/advanced-bot', component: <Boat /> },
  { path: '/ui/advanced-highlight', component: <Highlight /> },
  { path: '/ui/advanced-mask', component: <Mask /> },
  { path: '/ui/advanced-simplebar', component: <Simplebar /> },
  { path: '/ui/advanced-swiper', component: <SwiperElement /> },
  { path: '/ui/advanced-tree', component: <Tree /> },
  { path: '/ui/advanced-word-counter', component: <WordCounters /> },
  { path: '/ui/advanced-image-annotation', component: <ImageAnnotation /> },

  // icons
  { path: '/icons/lucide', component: <Lucide /> },
  { path: '/icons/remix', component: <Remix /> },
  { path: '/icons/heroicons', component: <Heroiocns /> },
  { path: '/icons/boxicon', component: <Boxicon /> },
  { path: '/icons/line-awesome', component: <LineAwesome /> },

  //   //charts
  { path: '/apexchart/area', component: <AreaCharts /> },
  { path: '/apexchart/bar', component: <BarCharts /> },
  { path: '/apexchart/box-whisker', component: <BoxWhisker /> },
  { path: '/apexchart/bubble', component: <BubbleChart /> },
  { path: '/apexchart/candlestick', component: <CandlestickCharts /> },
  { path: '/apexchart/column', component: <ColumnCharts /> },
  { path: '/apexchart/funnel', component: <FunnelCharts /> },
  { path: '/apexchart/heatmap', component: <HeatmapCharts /> },
  { path: '/apexchart/line', component: <LineCharts /> },
  { path: '/apexchart/mixed', component: <MixedCharts /> },
  { path: '/apexchart/pie', component: <PieChart /> },
  { path: '/apexchart/polar-area', component: <PolarAreaCharts /> },
  { path: '/apexchart/radar', component: <RadarCharts /> },
  { path: '/apexchart/radialbar', component: <RadialBarCharts /> },
  { path: '/apexchart/range-area', component: <RangeAreaCharts /> },
  { path: '/apexchart/scatter', component: <ScatterCharts /> },
  { path: '/apexchart/slope', component: <SlopeCharts /> },
  { path: '/apexchart/timeline', component: <TimelineChart /> },
  { path: '/apexchart/treemap', component: <TreeMapCharts /> },

  //   //apex tree
  { path: '/apextree/top-bottom', component: <ApexTreeTopBottomChart /> },
  { path: '/apextree/bottom-top', component: <ApexTreeBottomTopChart /> },
  { path: '/apextree/left-right', component: <ApexTreeLeftRightChart /> },
  { path: '/apextree/right-left', component: <ApexTreeRightLeftChart /> },
  {
    path: '/apextree/collapse-expand',
    component: <ApexTreeCollapseExpandChart />,
  },
  { path: '/apexsankey', component: <ApexSankeyChart /> },

  //   //echart
  { path: '/echart/bar', component: <BarEcharts /> },
  { path: '/echart/line', component: <LineECharts /> },
  { path: '/echart/pie', component: <PieECharts /> },

  //   // widgets
  { path: '/widgets/banners', component: <WidgetsBanners /> },
  { path: '/widgets/cards', component: <WidgetsCard /> },
  { path: '/widgets/charts', component: <WidgetsCharts /> },
  { path: '/widgets/data', component: <WidgetsData /> },

  //   //page
  { path: '/page/starter', component: <Starter /> },
  { path: '/page/account-settings', component: <AccountSettings /> },
  { path: '/page/account-security', component: <AccountSecurity /> },
  { path: '/page/account-billing-plan', component: <AccountBillingPlan /> },
  { path: '/page/account-notification', component: <AccountNotification /> },
  { path: '/page/account-statements', component: <AccountStatements /> },
  { path: '/page/account-logs', component: <AccountLogs /> },
  { path: '/page/user', component: <UserPage /> },
  { path: '/page/user-activity', component: <UserActivity /> },
  { path: '/page/user-followers', component: <UserFollowers /> },
  { path: '/page/user-documents', component: <UserDocuments /> },
  { path: '/page/user-notes', component: <UserNotes /> },
  { path: '/page/user-projects', component: <UserProjects /> },
  { path: '/page/pricing', component: <PricingPage /> },
  { path: '/page/pricing-admin', component: <PricingAdmin /> },
  { path: '/page/faq', component: <Faq /> },
  { path: '/page/licenses', component: <Licenses /> },
  { path: '/page/privacy-policy', component: <PrivacyPolicy /> },
  { path: '/page/help-center', component: <HelpCenter /> },

  //   //maps
  { path: '/maps/google', component: <MapComponent /> },
  { path: '/maps/vector', component: <VectorMaps /> },
]

const nonAuthRoutes = [
  { path: '/page/contact-us', component: <ContactUs /> },
  { path: '/page/contact-us-two', component: <ContactUsTwo /> },
  { path: '/page/contact-us-three', component: <ContactUsThree /> },
  { path: '/page/contact-us-four', component: <ContactUsFour /> },
  { path: '/page/contact-us-five', component: <ContactUsFive /> },
  { path: '/page/coming-soon', component: <ComingSoon /> },
  { path: '/page/maintenance', component: <Maintenance /> },
  { path: '/page/404', component: <PageNotFoundError /> },
  { path: '/page/500', component: <FiveZero /> },

  // landing
  { path: '/landing/doctors', component: <Doctors /> },
  { path: '/landing/ecommerce', component: <Ecommerce /> },
  { path: '/landing/email', component: <EmailLanding /> },
  { path: '/landing/invoice', component: <Invoice /> },
  { path: '/landing/school', component: <SchoolLanding /> },

  //   //  authentication
  { path: '/auth/signin-basic', component: <SignInBasicPage /> },
  { path: '/auth/signin-modern', component: <SignInModernPage /> },
  { path: '/auth/signin-creative', component: <SignInCreativePage /> },
  { path: '/auth/signup-basic', component: <SignUpBasicPage /> },
  { path: '/auth/signup-modern', component: <SignUpModernPage /> },
  { path: '/auth/signup-creative', component: <SignUpCreativePage /> },
  {
    path: '/auth/forgot-password-basic',
    component: <ForgotPasswordBasicPage />,
  },
  {
    path: '/auth/forgot-password-modern',
    component: <ForgotPasswordModernPage />,
  },
  {
    path: '/auth/forgot-password-creative',
    component: <ForgotPasswordCreativePage />,
  },
  { path: '/auth/reset-password-basic', component: <ResetPasswordBasicPage /> },
  {
    path: '/auth/reset-password-modern',
    component: <ResetPasswordModernPage />,
  },
  {
    path: '/auth/reset-password-creative',
    component: <ResetPasswordCreativePage />,
  },
  {
    path: '/auth/two-step-verification-basic',
    component: <TwoStepVerificationBasicPage />,
  },
  {
    path: '/auth/two-step-verification-modern',
    component: <TwoStepVerificationModernPage />,
  },
  {
    path: '/auth/two-step-verification-creative',
    component: <TwoStepVerificationCreativePage />,
  },
  {
    path: '/auth/successful-password-basic',
    component: <SuccessfulPasswordBasicPage />,
  },
  {
    path: '/auth/successful-password-modern',
    component: <SuccessfulPasswordModernPage />,
  },
  {
    path: '/auth/successful-password-creative',
    component: <SuccessfulPasswordCreativePage />,
  },
  {
    path: '/auth/account-deactivation-basic',
    component: <AccountDeactivationBasicPage />,
  },
  {
    path: '/auth/account-deactivation-modern',
    component: <AccountDeactivationModernPage />,
  },
  {
    path: '/auth/account-deactivation-creative',
    component: <AccountDeactivationCreativePage />,
  },
]

export { routes, nonAuthRoutes }
