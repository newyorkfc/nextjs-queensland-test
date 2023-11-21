export default function Schedule({ contractForm, isRead, setIsRead }) {
  const today = new Date();
  const formattedDate = `${String(today.getDate()).padStart(2, "0")}/${String(
    today.getMonth() + 1
  ).padStart(2, "0")}/${today.getFullYear()}`;

  return (
    <section className="paper schedule">
      <div className="container">
        <div className="tit-area">
          <h1 className="h1">Schedule A</h1>
        </div>
        <div className="content">
          <h3 className="h3">PIECEWORK RATES</h3>
          <div>
            <div className="form-wrap">
              <label htmlFor="input1">Starting date</label>
              <input
                type="text"
                className="input-box"
                id="input1"
                value={formattedDate}
                readOnly
              />
            </div>
            <div className="form-wrap">
              <label htmlFor="input1">Property Name</label>
              <input
                type="text"
                className="input-box"
                id="input1"
                value={contractForm.company.name}
                readOnly
              />
            </div>
            <div className="form-wrap">
              <label htmlFor="input1">Property Address</label>
              <input
                type="text"
                className="input-box"
                id="input1"
                value={contractForm.company && contractForm.company.address}
                readOnly
              />
            </div>
          </div>
          <h3 className="h3">PIECEWORK RATES</h3>
          {contractForm.scheduleArray.map((formSchedule) => (
            <dl key={formSchedule.number}>
              <dt>{formSchedule.title}</dt>
              <dd>
                <ul className="ulist-type1">
                  <li>{formSchedule.content1}</li>
                  <li>{formSchedule.content2}</li>
                  {formSchedule.content21 && formSchedule.content22 && (
                    <ul>
                      <li>{formSchedule.content21}</li>
                      <li>{formSchedule.content22}</li>
                    </ul>
                  )}
                </ul>
              </dd>
            </dl>
          ))}
          <div className="agree-wrap">
            <input
              type="checkbox"
              id="scheduleIsRead"
              value={isRead.schedule}
              onChange={() => {
                setIsRead({ ...isRead, schedule: !isRead.schedule });
              }}
            />
            <label htmlFor="scheduleIsRead">I have read and understood.</label>
          </div>
        </div>
      </div>
    </section>
  );
}
