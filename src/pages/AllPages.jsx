import { Link } from 'react-router-dom';
import { addCards } from 'store/asyncActions/addCards';


import { connect } from 'react-redux';
import ActionFn from 'store/actions';
import RenderFormAccount from 'components/forms/RenderFormAccount';


const AllPages = ({ pages, fields, dataForm, checkingStatus }) => {





  const currentMenu = {
    id: 'news',
    link: 'news',
    title: 'Новости',
    content: 'dsfds dfds fdsf ghfodghdf ogfdhg ;odfghfd;gohdf;g',
    img: 'https://firebasestorage.googleapis.com/v0/b/stafftogo-8721b.appspot.com/o/pages-content%2Fcontacts.jpg?alt=media&token=58be4764-8313-4855-844e-d73e4893278f',
    menuPlace: 'menuNav',
    order: 3
  }


  const onSubmitIn = () => {

    addCards(dataForm.values, 'pages', 0);
  }


  return (
    <div>
      <div className="stub"></div>
      <div className="content">
        <div className="main-full">
          <h1>
            Все Страницы
          </h1>
        </div>
        <div className="main-full">
          <h2>
            Список страниц
          </h2>
          <ul>
            {pages.map((item, index) => (<li key={index}>
              <Link to={`/${item.data.link}`}>{item.data.title}</Link>
            </li>))}
          </ul>
          {checkingStatus ? 'Loading account...' : (
            <RenderFormAccount
              btnSaveText="Добавить страницу"
              objFields={fields}
              orderFields={fields.order}
              onSubmitIn={onSubmitIn}
              sending={true}
              btnWrapClass="col-9  btn-container"
              btnClass='btn-save btn--green ico-in ico-in--left'
              formClassAdd="main-grid"

            />)}

        </div>

      </div>

    </div>
  )
}


const mapStateToProps = (state) => {

  const formReducer = state.form && state.form.singleInput;
  const fields = state.fieldsPages;

  return {
    fields: fields,
    dataForm: formReducer,
    checkingStatus: state.accountInfo.checkingStatus
  }
}

export default connect(mapStateToProps,
  {
    ActionFn
  })(AllPages);