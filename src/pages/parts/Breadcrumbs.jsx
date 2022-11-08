import useBreadcrumbs from "use-react-router-breadcrumbs";
import { Link } from "react-router-dom";


const categoryById = {
  'resume': 'Резюме',
  'vacancies': 'Вакансии',

}

const userNamesById = { '3tdZG3iitthG5unarGCa': "John" };

const DynamicUserBreadcrumb = ({ match }) => {
  // console.log('m', match)
  return (
    <span>{categoryById[match.params.catagoryName]}</span>
  )
};

const CustomPropsBreadcrumb = ({ someProp }) => <span>{someProp}</span>;

const routes = [
  { path: "/catalog/", breadcrumb: null },
  { path: "/catalog/:catagoryName/", breadcrumb: DynamicUserBreadcrumb },
  { path: "/cabinet/", breadcrumb: "Кабинет" },
  { path: "/cabinet/resume", breadcrumb: "Резюме" },
  { path: "/cabinet/resume-new", breadcrumb: "Создать резюме" },
  { path: "/cabinet/liked", breadcrumb: "Избранное" },
  { path: "/cabinet/hidden", breadcrumb: "Спрятанное" },
  { path: "/cabinet/invitations", breadcrumb: "Отклики" },
  { path: "/cabinet/responses", breadcrumb: "Приглашения" },
  { path: "/cabinet/chat", breadcrumb: "Чат" },
  { path: "/cabinet/videochat", breadcrumb: "Видеочат" },
  { path: "/cabinet/account-edit", breadcrumb: 'Редактировать акканут' },
];

const Breadcrumbs = () => {
  const breadcrumbs = useBreadcrumbs(routes);

  return (
    <div className="main-full">
      <div className="breadcrumbs">
        {breadcrumbs.map(({ match, breadcrumb }) => (
          <Link key={match.pathname} to={match.pathname}>
            {breadcrumb}
            <em>/</em>
          </Link>
        ))}
      </div>
    </div>
  );
};
export default Breadcrumbs
