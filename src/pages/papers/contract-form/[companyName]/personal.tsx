import { LocationVO } from "app/customers/farm/model";
import { SuburbVO } from "app/papers/contract/model";
import { NewContractEnum, NewContractVO } from "app/papers/new-contract/model";
import axios from "axios";
import NavigationButton from "components/papers/contract-form/navigation-button";
import { updateNewContract } from "helpers/papers/new-contract/updateNewContract";
import { useNewContract } from "hooks/papers/new-contract/useNewContract";
import { useRouter } from "next/router";
import { Dispatch, SetStateAction, useEffect, useState } from "react";

export default function Personal() {
  const router = useRouter();
  const companyName = router.query.companyName;

  const [newContract, setNewContract]: [
    NewContractVO,
    Dispatch<SetStateAction<NewContractVO>>
  ] = useNewContract();

  const [locations, setLocations] = useState<Array<LocationVO>>([]);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [selectedLocationId, setSelectedLocationId] = useState(null);
  const [selectedGender, setSelectedGender] = useState("");

  const [suburbQuery, setSuburbQuery] = useState("");
  const [suburbs, setSuburbs] = useState<Array<SuburbVO | null>>([]);
  const [selectedSuburb, setSelectedSuburb] = useState<SuburbVO | null>(null);

  const handleTitleChange = (e) => {
    updateNewContract(newContract, setNewContract, NewContractEnum.worker, {
      title: e.target.value,
    });
  };

  const handleLocationChange = (e) => {
    setSelectedLocationId(Number(e.target.value));
  };

  const handleFarmChange = (e) => {
    updateNewContract(newContract, setNewContract, NewContractEnum.contract, {
      farmId: e.target.value,
    });
  };

  const handleFirstNameChange = (e) => {
    updateNewContract(newContract, setNewContract, NewContractEnum.worker, {
      firstName: e.target.value,
    });
  };

  const handleLastNameChange = (e) => {
    updateNewContract(newContract, setNewContract, NewContractEnum.worker, {
      lastName: e.target.value,
    });
  };

  const handleEnglishNameChange = (e) => {
    updateNewContract(newContract, setNewContract, NewContractEnum.worker, {
      englishName: e.target.value,
    });
  };

  const handleGenderChange = (e) => {
    updateNewContract(newContract, setNewContract, NewContractEnum.worker, {
      gender: e.target.value,
    });
    setSelectedGender(e.target.value);
  };

  const handleBirthDateChange = (field, value) => {
    const birthDate = newContract.worker.birthDate || "";
    const [day, month, year] = birthDate.split("/");

    switch (field) {
      case "day":
        updateNewContract(newContract, setNewContract, NewContractEnum.worker, {
          birthDate: `${value}/${month || ""}/${year || ""}`,
        });
        break;
      case "month":
        updateNewContract(newContract, setNewContract, NewContractEnum.worker, {
          birthDate: `${day || ""}/${value}/${year || ""}`,
        });
        break;
      case "year":
        updateNewContract(newContract, setNewContract, NewContractEnum.worker, {
          birthDate: `${day || ""}/${month || ""}/${value}`,
        });
        break;
      default:
        break;
    }
  };

  const handleCellPhoneChange = (e) => {
    updateNewContract(
      newContract,
      setNewContract,
      NewContractEnum.personalDetail,
      {
        cellPhone: e.target.value,
      }
    );
  };

  const handleEmailCahange = (e) => {
    updateNewContract(
      newContract,
      setNewContract,
      NewContractEnum.personalDetail,
      {
        email: e.target.value,
      }
    );
  };

  const handleAddressChange = (field, value) => {
    const address = newContract.contract.personalDetail.address || "";
    const [street, suburb] = address.split(", ");
    switch (field) {
      case "street":
        updateNewContract(
          newContract,
          setNewContract,
          NewContractEnum.personalDetail,
          {
            address: `${value}, ${suburb || ""}`,
          }
        );
        break;
      case "suburb":
        updateNewContract(
          newContract,
          setNewContract,
          NewContractEnum.personalDetail,
          {
            address: `${street || ""}, ${value}`,
          }
        );
        break;
      default:
        break;
    }
  };

  const handleSubrubInputChange = async (event) => {
    const value = event.target.value;
    setSuburbQuery(value);
    setSelectedSuburb(null);

    if (value.length > 2) {
      try {
        const response = await axios.get(`/api/suburbs?q=${value}`);
        setSuburbs(response.data);
      } catch (error) {
        console.error(error);
        setSuburbs([]);
      }
    } else {
      setSuburbs([]);
    }
  };

  const handleSuburbClick = (suburb: SuburbVO) => {
    setSelectedSuburb(suburb);
    setSuburbs([]);
    handleAddressChange(
      "suburb",
      `${suburb.name}, ${suburb.state.abbreviation} ${suburb.postcode}`
    );
  };

  const handleTaxFileNumberChange = (e) => {
    updateNewContract(
      newContract,
      setNewContract,
      NewContractEnum.personalDetail,
      {
        taxFileNumber: e.target.value,
      }
    );
  };

  const handleVisaGrantNumberChange = (e) => {
    updateNewContract(newContract, setNewContract, NewContractEnum.passport, {
      visaGrantNumber: e.target.value,
    });
  };

  const handleVisaExpireDateChange = (e) => {
    updateNewContract(newContract, setNewContract, NewContractEnum.passport, {
      visaExpireDate: e.target.value,
    });
  };

  const handleNationalityChange = (e) => {
    updateNewContract(newContract, setNewContract, NewContractEnum.passport, {
      nationality: e.target.value,
    });
  };

  const handlepassportNumberChange = (e) => {
    updateNewContract(newContract, setNewContract, NewContractEnum.passport, {
      passportNumber: e.target.value,
    });
  };

  const handleEmergencyContactName = (e) => {
    updateNewContract(
      newContract,
      setNewContract,
      NewContractEnum.emergencyContact,
      {
        name: e.target.value,
      }
    );
  };

  const handleEmergencyContactCellPhoneChange = (e) => {
    updateNewContract(
      newContract,
      setNewContract,
      NewContractEnum.emergencyContact,
      {
        cellPhone: e.target.value,
      }
    );
  };

  const handleFundNameChange = (e) => {
    updateNewContract(
      newContract,
      setNewContract,
      NewContractEnum.superannuation,
      {
        fundName: e.target.value,
      }
    );
  };

  const handleMemberNumberChange = (e) => {
    updateNewContract(
      newContract,
      setNewContract,
      NewContractEnum.superannuation,
      {
        memberNumber: e.target.value,
      }
    );
  };

  const handleBankNameChange = (e) => {
    updateNewContract(newContract, setNewContract, NewContractEnum.bankDetail, {
      bankName: e.target.value,
    });
  };

  const handleAccountNameChange = (e) => {
    updateNewContract(newContract, setNewContract, NewContractEnum.bankDetail, {
      accountName: e.target.value,
    });
  };

  const handleBsbChange = (e) => {
    updateNewContract(newContract, setNewContract, NewContractEnum.bankDetail, {
      bsb: e.target.value,
    });
  };

  const handleAccountNumberChange = (e) => {
    updateNewContract(newContract, setNewContract, NewContractEnum.bankDetail, {
      accountNumber: e.target.value,
    });
  };

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
                      checked={newContract.worker.title === title.toLowerCase()}
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
              <select id="farmId" onChange={handleFarmChange}>
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
              <input
                type="text"
                className="input-box md"
                id="firstName"
                onChange={handleFirstNameChange}
                value={newContract.worker.firstName}
              />
            </dd>
            <dt>
              <label htmlFor="lastName">Last Name</label>
            </dt>
            <dd>
              <input
                type="text"
                className="input-box md"
                id="lastName"
                onChange={handleLastNameChange}
                value={newContract.worker.lastName}
              />
            </dd>
          </dl>
          <dl>
            <dt>
              <label htmlFor="englishName">English Name</label>
            </dt>
            <dd>
              <input
                type="text"
                className="input-box md"
                id="englishName"
                onChange={handleEnglishNameChange}
                value={newContract.worker.englishName}
              />
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
                value={(newContract.worker.birthDate || "").split("/")[0] || ""}
                placeholder="day"
                maxLength={2}
                onChange={(e) => handleBirthDateChange("day", e.target.value)}
              />
              <span>/</span>
              <input
                type="number"
                value={(newContract.worker.birthDate || "").split("/")[1] || ""}
                placeholder="month"
                maxLength={2}
                onChange={(e) => handleBirthDateChange("month", e.target.value)}
              />
              <span>/</span>
              <input
                type="number"
                id="birthDate"
                value={(newContract.worker.birthDate || "").split("/")[2] || ""}
                placeholder="year"
                maxLength={4}
                onChange={(e) => handleBirthDateChange("year", e.target.value)}
              />
            </dd>
          </dl>
          <dl>
            <dt>
              <label htmlFor="cellPhone">Mobile number</label>
            </dt>
            <dd>
              <input
                type="text"
                className="input-box"
                id="cellPhone"
                onChange={handleCellPhoneChange}
                value={newContract.personalDetail.cellPhone}
              />
            </dd>
          </dl>
          <dl>
            <dt>
              <label htmlFor="email">Email Address</label>
            </dt>
            <dd>
              <input
                type="text"
                className="input-box"
                id="email"
                onChange={handleEmailCahange}
                value={newContract.personalDetail.email}
              />
            </dd>
          </dl>
          <dl>
            <dt>
              <label htmlFor="address">Address</label>
            </dt>
            <dd className="flex">
              <label htmlFor="street">Street</label>
              <input
                type="text"
                id="street"
                className="input-box md"
                onChange={(e) => {
                  handleAddressChange("street", e.target.value);
                }}
              ></input>
            </dd>
            <dd className="flex">
              <label htmlFor="suburb">Suburb / Postcode</label>
              <div className="search-list">
                <input
                  type="text"
                  id="suburb"
                  className="input-box md"
                  value={
                    selectedSuburb
                      ? `${selectedSuburb.name}, ${selectedSuburb.state.abbreviation} ${selectedSuburb.postcode}`
                      : suburbQuery
                  }
                  onChange={handleSubrubInputChange}
                  autoComplete="off"
                />
                {suburbs.length > 0 && (
                  <ul>
                    {suburbs.map((suburb, index) => {
                      const matchIndex = suburb.name
                        .toLowerCase()
                        .indexOf(suburbQuery.toLowerCase());
                      const postcodeMatchIndex = suburb.postcode
                        .toString()
                        .indexOf(suburbQuery);

                      const nameMatchText =
                        matchIndex >= 0 ? (
                          <>
                            {suburb.name.slice(0, matchIndex)}
                            <strong>
                              {suburb.name.slice(
                                matchIndex,
                                matchIndex + suburbQuery.length
                              )}
                            </strong>
                            {suburb.name.slice(matchIndex + suburbQuery.length)}
                          </>
                        ) : (
                          <>{suburb.name}</>
                        );

                      const postcodeMatchText =
                        postcodeMatchIndex >= 0 ? (
                          <>
                            {suburb.postcode
                              .toString()
                              .slice(0, postcodeMatchIndex)}
                            <strong>
                              {suburb.postcode
                                .toString()
                                .slice(
                                  postcodeMatchIndex,
                                  postcodeMatchIndex + suburbQuery.length
                                )}
                            </strong>
                            {suburb.postcode
                              .toString()
                              .slice(postcodeMatchIndex + suburbQuery.length)}
                          </>
                        ) : (
                          <>{suburb.postcode}</>
                        );

                      return (
                        <li
                          key={index}
                          onClick={() => handleSuburbClick(suburb)}
                        >
                          {nameMatchText}, {suburb.state?.abbreviation}{" "}
                          {postcodeMatchText}
                        </li>
                      );
                    })}
                  </ul>
                )}
              </div>
            </dd>
          </dl>
          <dl>
            <dt>
              <label htmlFor="taxFileNumber">Tax File No</label>
            </dt>
            <dd>
              <input
                type="text"
                className="input-box"
                id="taxFileNumber"
                onChange={handleTaxFileNumberChange}
              />
            </dd>
          </dl>
          <dl>
            <dt>
              <label htmlFor="visaGrantNumber">Visa Grant No</label>
            </dt>
            <dd>
              <input
                type="text"
                className="input-box"
                id="visaGrantNumber"
                onChange={handleVisaGrantNumberChange}
              />
            </dd>
          </dl>
          <dl>
            <dt>
              <label htmlFor="visaExpireDate">Visa Expiry Date</label>
            </dt>
            <dd>
              <input
                type="text"
                className="input-box"
                id="visaExpireDate"
                onChange={handleVisaExpireDateChange}
              />
            </dd>
          </dl>
          <dl>
            <dt>
              <label htmlFor="nationality">Nationality</label>
            </dt>
            <dd>
              <input
                type="text"
                className="input-box"
                id="nationality"
                onChange={handleNationalityChange}
              />
            </dd>
          </dl>
          <dl>
            <dt>
              <label htmlFor="passportNumber">Passport No</label>
            </dt>
            <dd>
              <input
                type="text"
                className="input-box"
                id="passportNumber"
                onChange={handlepassportNumberChange}
              />
            </dd>
          </dl>
          <h3 className="h3">Emergency Information</h3>
          <dl>
            <dt>
              <label htmlFor="emergencyContactName">Name</label>
            </dt>
            <dd>
              <input
                type="text"
                className="input-box"
                id="emergencyContactName"
                onChange={handleEmergencyContactName}
              />
            </dd>
          </dl>
          <datalist>
            <label htmlFor="emergencyContactCellPhone">Mobile Number</label>
            <input
              type="text"
              className="input-box"
              id="emergencyContactCellPhone"
              onChange={handleEmergencyContactCellPhoneChange}
            />
          </datalist>
          <h3 className="h3">Superannuation</h3>
          <dl>
            <dt>
              <label htmlFor="fundName">Name of Fund</label>
            </dt>
            <dd>
              <input
                type="text"
                className="input-box"
                id="fundName"
                onChange={handleFundNameChange}
              />
            </dd>
          </dl>
          <dl>
            <dt>
              <label htmlFor="memberNumber">Member No</label>
            </dt>
            <dd>
              <input
                type="text"
                className="input-box"
                id="memberNumber"
                onChange={handleMemberNumberChange}
              />
            </dd>
          </dl>
          <h3 className="h3">Bank Details</h3>
          <dl>
            <dt>
              <label htmlFor="bankName">Bank Name</label>
            </dt>
            <dd>
              <input
                type="text"
                className="input-box"
                id="bankName"
                onChange={handleBankNameChange}
              />
            </dd>
          </dl>
          <dl>
            <dt>
              <label htmlFor="accountName">Account Name</label>
            </dt>
            <dd>
              <input
                type="text"
                className="input-box"
                id="accountName"
                onChange={handleAccountNameChange}
              />
            </dd>
          </dl>
          <dl>
            <dt>
              <label htmlFor="bsb">BSB</label>
            </dt>
            <dd>
              <input
                type="text"
                className="input-box"
                id="bsb"
                onChange={handleBsbChange}
              />
            </dd>
          </dl>
          <dl>
            <dt>
              <label htmlFor="accountNumber">Account No</label>
            </dt>
            <dd>
              <input
                type="text"
                className="input-box"
                id="accountNumber"
                onChange={handleAccountNumberChange}
              />
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