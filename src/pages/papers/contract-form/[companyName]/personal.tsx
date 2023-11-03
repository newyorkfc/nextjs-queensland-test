import { LocationVO } from "app/customers/farm/model";
import axios from "axios";
import NavigationButton from "components/papers/contract-form/navigation-button";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";

export default function Personal() {
  const router = useRouter();
  const companyName = router.query.companyName;
  const today = new Date();
  const formmatedDate = `${today.getDate()}/${today.getMonth()}/${today.getFullYear()}`;

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
    <>
      <h1>{companyName}</h1>
      <h2>Personal Details</h2>
      <div>
        <p>
          Information is gathered to ensure employment requirements are
          fulfilled including tax, superannuation, work health & safety and work
          rights compliance.
        </p>
      </div>
      <div>
        <span>Title : </span>
        {["Mr", "Mrs", "Miss", "Ms"].map((title) => (
          <label key={title}>
            {title}
            <span>
              <input
                type="radio"
                id="title"
                value={title.toLowerCase()}
                checked={selectedTitle === title.toLowerCase()}
                onChange={handleTitleChange}
              />
            </span>
          </label>
        ))}
      </div>
      <div>
        <span>Location : </span>
        <select id="locationId" onChange={handleLocationChange}>
          <option>select</option>
          {locations.map((location) => (
            <option key={location.id} value={location.id}>
              {location.name}
            </option>
          ))}
        </select>
      </div>
      <div>
        <span>Farm : </span>
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
      </div>
      <div>
        <label htmlFor="firstName">First Name : </label>
        <input type="text" id="firstName" />
      </div>
      <div>
        <label htmlFor="lastName">Last Name : </label>
        <input type="text" id="lastName" />
      </div>
      <div>
        <label htmlFor="englishName">English Name : </label>
        <input type="text" id="englishName" />
      </div>
      <div>
        <span>Gender : </span>
        {["Male", "Female"].map((gender) => (
          <label key={gender}>
            {gender}
            <span>
              <input
                type="radio"
                id="gender"
                value={gender.toLowerCase()}
                checked={selectedGender === gender.toLowerCase()}
                onChange={handleGenderChange}
              />
            </span>
          </label>
        ))}
      </div>
      <div>
        <label htmlFor="birthDate">Date Of Birth : </label>
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
      </div>
      <div>
        <label htmlFor="cellPhone">Mobile number : </label>
        <input type="text" id="cellPhone" />
      </div>
      <div>
        <label htmlFor="email">Email Address : </label>
        <input type="text" id="email" />
      </div>
      <div>
        <label htmlFor="address">Address : </label>
        <input type="text" id="address" />
      </div>
      <div>
        <label htmlFor="address">Address : </label>
        <input type="text" id="address" />
      </div>
      <div>
        <label htmlFor="taxFileNumber">Tax File No : </label>
        <input type="text" id="taxFileNumber" />
      </div>
      <div>
        <label htmlFor="visaGrantNumber">Visa Grant No : </label>
        <input type="text" id="visaGrantNumber" />
      </div>
      <div>
        <label htmlFor="visaExpireDate">Visa Expiry Date : </label>
        <input type="text" id="visaExpireDate" />
      </div>
      <div>
        <label htmlFor="nationality">Nationality : </label>
        <input type="text" id="nationality" />
      </div>
      <div>
        <label htmlFor="passportNumber">Passport No : </label>
        <input type="text" id="passportNumber" />
      </div>
      <h3>Emergency Information</h3>
      <div>
        <label htmlFor="EmergencyContactName">Name : </label>
        <input type="text" id="EmergencyContactName" />
      </div>
      <div>
        <label htmlFor="EmergencyContactCellPhone">Mobile Number : </label>
        <input type="text" id="EmergencyContactCellPhone" />
      </div>
      <h3>Superannuation</h3>
      <div>
        <label htmlFor="fundName">Name of Fund : </label>
        <input type="text" id="fundName" />
      </div>
      <div>
        <label htmlFor="memberNumber">Member No : </label>
        <input type="text" id="memberNumber" />
      </div>
      <h3>Bank Details</h3>
      <div>
        <label htmlFor="bankName">Bank Name : </label>
        <input type="text" id="bankName" />
      </div>
      <div>
        <label htmlFor="accountName">Account Name : </label>
        <input type="text" id="accountName" />
      </div>
      <div>
        <label htmlFor="bsb">BSB : </label>
        <input type="text" id="bsb" />
      </div>
      <div>
        <label htmlFor="accountNumber">Account No : </label>
        <input type="text" id="accountNumber" />
      </div>
      <NavigationButton
        prevPath={`/papers/contract-form/${companyName}/pdf`}
        nextPath={`/papers/contract-form/${companyName}/policy`}
        currentPage={2}
      />
    </>
  );
}
