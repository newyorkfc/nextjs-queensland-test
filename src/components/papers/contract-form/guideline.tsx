export default function Guideline({contractForm}) {

  const midIndex = Math.ceil(contractForm.guidelineArray.length / 2);
  const firstHalfGuidelines = contractForm.guidelineArray.slice(0, midIndex);
  const secondHalfGuidelines = contractForm.guidelineArray.slice(midIndex);

  return (
    <section className="paper guideline">
      <div className="container">
        <div className="tit-area">
          <h1 className="h1">Work Health & Safety Guidelines</h1>
        </div>
        <div className="content">
          <div className="col-wrap">
            <div className="col">
              {firstHalfGuidelines.map((formGuideline) => (
                <div key={formGuideline.number}>
                  <h3 className="h3">
                    {formGuideline.number}. {formGuideline.title}
                  </h3>
                  <p
                    style={{
                      whiteSpace: "pre-line",
                    }}
                  >
                    {formGuideline.content}
                  </p>
                </div>
              ))}
            </div>
            <div className="col">
              {secondHalfGuidelines.map((formGuideline) => (
                <div key={formGuideline.number}>
                  <h3 className="h3">
                    {formGuideline.number}. {formGuideline.title}
                  </h3>
                  <p
                    style={{
                      whiteSpace: "pre-line",
                    }}
                  >
                    {formGuideline.content}
                  </p>
                </div>
              ))}
            </div>
          </div>

          <div className="agree-wrap">
            <input type="checkbox" id="check1" />
            <label htmlFor="check1">I have read and understood.</label>
          </div>
        </div>
      </div>
    </section>
  );
}
