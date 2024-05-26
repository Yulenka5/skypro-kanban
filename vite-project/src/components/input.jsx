import './Calendar/Calendar.Styles.css'

function Input() {
  return (
    <>
      <input type="hidden" id="datepick_value" value="08.09.2023" />
      <div className="calendar__period">
        <p className="calendar__p date-end">
          Выберите срок исполнения <span className="date-control"></span>.
        </p>
      </div>
    </>
  );
}

export default Input