import { LocationVO } from "app/customers/farm/model";
import axios from "axios";
import NavigationButton from "components/papers/contract-form/navigation-button";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";

export default function Personal() {
  const router = useRouter();
  const companyName = router.query.companyName;

  const [selectedTitle, setSelectedTitle] = useState("");
  const [locations, setLocations] = useState<Array<LocationVO>>([]);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [selectedLocationId, setSelectedLocationId] = useState(null);
  const [birthDate, setBirthDate] = useState("");
  const [selectedGender, setSelectedGender] = useState("");

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          `${process.env.NEXT_PUBLIC_SERVER_URL}/customers/farm?by=location`
        );
        setLocations(response.data.array);
      } catch (error) {
        console.log(error);
      } finally {
        setIsLoading(false);
      }
    };
    fetchData();
  }, []);
  if (isLoading) {
    return <div>Loading...</div>;
  }

  const handleTitleChange = (e) => {
    setSelectedTitle(e.target.value);
  };
  const handleLocationChange = (e) => {
    setSelectedLocationId(Number(e.target.value));
  };
  const handleDateChange = (field, value) => {
    const [day, month, year] = birthDate.split("/");

    switch (field) {
      case "day":
        setBirthDate(`${value}/${month || ""}/${year || ""}`);
        break;
      case "month":
        setBirthDate(`${day || ""}/${value}/${year || ""}`);
        break;
      case "year":
        setBirthDate(`${day || ""}/${month || ""}/${value}`);
        break;
      default:
        break;
    }
  };
  const handleGenderChange = (e) => {
    setSelectedGender(e.target.value);
  };

  return (
    <section className="paper personal">
      <div className="container">
        <div className="tit-area">
          <h1 className="h1">{companyName}</h1>
        </div>
        <div className="content">
          <h2 className="h2">Personal Details</h2>
          <p className="desc">
            Information is gathered to ensure employment requirements are
            fulfilled including tax, superannuation, work health & safety and
            work rights compliance.
          </p>
          <dl>
            <dt>Title</dt>
            <dd>
              <div className="radio-box">
                {["Mr", "Mrs", "Miss", "Ms"].map((title) => (
                  <label key={title}>
                    <input
                      type="radio"
                      id="title"
                      value={title.toLowerCase()}
                      checked={selectedTitle === title.toLowerCase()}
                      onChange={handleTitleChange}
                    />
                    <span>{title}</span>
                  </label>
                ))}
              </div>
            </dd>
          </dl>
          <dl>
            <dt>Location</dt>
            <dd>
              <select id="locationId" onChange={handleLocationChange}>
                <option>select</option>
                {locations.map((location) => (
                  <option key={location.id} value={location.id}>
                    {location.name}
                  </option>
                ))}
              </select>
            </dd>
          </dl>
          <dl>
            <dt>Farm</dt>
            <dd>
              <select id="farmId">
                <option>select</option>
                {selectedLocationId &&
                  locations
                    .find((loc) => loc.id === selectedLocationId)
                    .farmArray.map((farm) => (
                      <option key={farm.id} value={farm.id}>
                        {farm.name}
                      </option>
                    ))}
              </select>
            </dd>
          </dl>
          <dl>
            <dt>
              <label htmlFor="firstName">First Name</label>
            </dt>
            <dd>
              <input type="text" className="input-box md" id="firstName" />
            </dd>
            <dt>
              <label htmlFor="lastName">Last Name</label>
            </dt>
            <dd>
              <input type="text" className="input-box md" id="lastName" />
            </dd>
          </dl>
          <dl>
            <dt>
              <label htmlFor="englishName">English Name</label>
            </dt>
            <dd>
              <input type="text" className="input-box md" id="englishName" />
            </dd>
            <dt>Gender</dt>
            <dd>
              <div className="radio-box">
                {["Male", "Female"].map((gender) => (
                  <label key={gender}>
                    <input
                      type="radio"
                      id="gender"
                      value={gender.toLowerCase()}
                      checked={selectedGender === gender.toLowerCase()}
                      onChange={handleGenderChange}
                    />
                    <span>{gender}</span>
                  </label>
                ))}
              </div>
            </dd>
          </dl>
          <dl>
            <dt>
              <label htmlFor="birthDate">Date Of Birth</label>
            </dt>
            <dd>
              <input
                type="number"
                value={birthDate.split("/")[0]}
                placeholder="day"
                maxLength={2}
                onChange={(e) => handleDateChange("day", e.target.value)}
              />
              <span>/</span>
              <input
                type="number"
                value={birthDate.split("/")[1]}
                placeholder="month"
                maxLength={2}
                onChange={(e) => handleDateChange("month", e.target.value)}
              />
              <span>/</span>
              <input
                type="number"
                id="birthDate"
                value={birthDate.split("/")[2]}
                placeholder="year"
                maxLength={4}
                onChange={(e) => handleDateChange("year", e.target.value)}
              />
            </dd>
          </dl>
          <dl>
            <dt>
              <label htmlFor="cellPhone">Mobile number</label>
            </dt>
            <dd>
              <input type="text" className="input-box" id="cellPhone" />
            </dd>
          </dl>
          <dl>
            <dt>
              <label htmlFor="email">Email Address</label>
            </dt>
            <dd>
              <input type="text" className="input-box" id="email" />
            </dd>
          </dl>
          <dl>
            <dt>
              <label htmlFor="address">Address</label>
            </dt>
            <dd>
              <input type="text" className="input-box" id="address" />
            </dd>
          </dl>
          <dl>
            <dt>
              <label htmlFor="taxFileNumber">Tax File No</label>
            </dt>
            <dd>
              <input type="text" className="input-box" id="taxFileNumber" />
            </dd>
          </dl>
          <dl>
            <dt>
              <label htmlFor="visaGrantNumber">Visa Grant No</label>
            </dt>
            <dd>
              <input type="text" className="input-box" id="visaGrantNumber" />
            </dd>
          </dl>
          <dl>
            <dt>
              <label htmlFor="visaExpireDate">Visa Expiry Date</label>
            </dt>
            <dd>
              <input type="text" className="input-box" id="visaExpireDate" />
            </dd>
          </dl>
          <dl>
            <dt>
              <label htmlFor="nationality">Nationality</label>
            </dt>
            <dd>
              <input type="text" className="input-box" id="nationality" />
            </dd>
          </dl>
          <dl>
            <dt>
              <label htmlFor="passportNumber">Passport No</label>
            </dt>
            <dd>
              <input type="text" className="input-box" id="passportNumber" />
            </dd>
          </dl>
          <h3 className="h3">Emergency Information</h3>
          <dl>
            <dt>
              <label htmlFor="EmergencyContactName">Name</label>
            </dt>
            <dd>
              <input
                type="text"
                className="input-box"
                id="EmergencyContactName"
              />
            </dd>
          </dl>
          <datalist>
            <label htmlFor="EmergencyContactCellPhone">Mobile Number</label>
            <input
              type="text"
              className="input-box"
              id="EmergencyContactCellPhone"
            />
          </datalist>
          <h3 className="h3">Superannuation</h3>
          <dl>
            <dt>
              <label htmlFor="fundName">Name of Fund</label>
            </dt>
            <dd>
              <input type="text" className="input-box" id="fundName" />
            </dd>
          </dl>
          <dl>
            <dt>
              <label htmlFor="memberNumber">Member No</label>
            </dt>
            <dd>
              <input type="text" className="input-box" id="memberNumber" />
            </dd>
          </dl>
          <h3 className="h3">Bank Details</h3>
          <dl>
            <dt>
              <label htmlFor="bankName">Bank Name</label>
            </dt>
            <dd>
              <input type="text" className="input-box" id="bankName" />
            </dd>
          </dl>
          <dl>
            <dt>
              <label htmlFor="accountName">Account Name</label>
            </dt>
            <dd>
              <input type="text" className="input-box" id="accountName" />
            </dd>
          </dl>
          <dl>
            <dt>
              <label htmlFor="bsb">BSB</label>
            </dt>
            <dd>
              <input type="text" className="input-box" id="bsb" />
            </dd>
          </dl>
          <dl>
            <dt>
              <label htmlFor="accountNumber">Account No</label>
            </dt>
            <dd>
              <input type="text" className="input-box" id="accountNumber" />
            </dd>
          </dl>
        </div>
        <NavigationButton
          prevPath={`/papers/contract-form/${companyName}/pdf`}
          nextPath={`/papers/contract-form/${companyName}/policy`}
          currentPage={2}
        />
      </div>
    </section>
  );
}
