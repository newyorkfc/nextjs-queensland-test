import NavigationButton from "components/papers/contract-form/navigation-button";

export default function Policy({ contractForm }) {
  const midIndex = Math.ceil(contractForm.policyArray.length / 2);
  const firstHalfPolicies = contractForm.policyArray.slice(0, midIndex);
  const secondHalfPolicies = contractForm.policyArray.slice(midIndex);

  return (
    <section className="paper">
      <div className="container">
        <div className="tit-area">
          <h1 className="h1">{contractForm.company.name} Policies</h1>
        </div>
        <div className="content">
          <div className="col-wrap">
            <div className=" col">
              {firstHalfPolicies.map((formPolicy) => (
                <div key={formPolicy.number}>
                  <h3 className="h3">
                    {formPolicy.number}. {formPolicy.title}
                  </h3>
                  <p>{formPolicy.contentHead}</p>
                  <ul>
                    {formPolicy.formPolicyDetailArray.map(
                      (formPolicyDetail) => (
                        <li key={formPolicyDetail.number}>
                          {formPolicyDetail.content}
                        </li>
                      )
                    )}
                  </ul>
                  <p>{formPolicy.contentTail}</p>
                </div>
              ))}
            </div>
            <div className=" col">
              {secondHalfPolicies.map((formPolicy) => (
                <div key={formPolicy.number}>
                  <h3 className="h3">
                    {formPolicy.number}. {formPolicy.title}
                  </h3>
                  <p>{formPolicy.contentHead}</p>
                  <ul>
                    {formPolicy.formPolicyDetailArray.map(
                      (formPolicyDetail) => (
                        <li key={formPolicyDetail.number}>
                          {formPolicyDetail.content}
                        </li>
                      )
                    )}
                  </ul>
                  <p>{formPolicy.contentTail}</p>
                </div>
              ))}
            </div>
          </div>
          <div className="agree-wrap">
            <input type="checkbox" id="check1" />
            <label htmlFor="check1">
              By checking here, I declare that I will abide by company policies.
            </label>
          </div>
        </div>
      </div>
    </section>
  );
}
