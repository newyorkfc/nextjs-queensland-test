import axios from "axios";
import { useState } from "react";

export default function Test() {
  interface StateVO {
    name: string | null;
    abbreviation: string | null;
  }
  interface SuburbVO {
    name: string | null;
    postcode: number | null;
    state: StateVO | null;
    locality: string | null;
    latitude: number | null;
    longtiude: number | null;
  }

  const [suburbQuery, setSuburbQuery] = useState("");
  const [suburbs, setSuburbs] = useState<Array<SuburbVO | null>>([]);
  const [selectedSuburb, setSelectedSuburb] = useState<SuburbVO | null>(null);

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
  };

  return (
    <>
      <h1>Test</h1>
      <div>
        <dl>
          <dt>
            <label htmlFor="street">Street Address: </label>
          </dt>
          <dd>
            <input type="text" id="street"></input>
          </dd>
          <dt>
            <label htmlFor="suburb">Suburb / Postcode : </label>
          </dt>
          <dd>
            <input
              type="text"
              id="suburb"
              value={
                selectedSuburb
                  ? `${selectedSuburb.name}, ${selectedSuburb.state?.abbreviation} ${selectedSuburb.postcode}`
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
                  const beforeMatchText = suburb.name.slice(0, matchIndex);
                  const matchText = suburb.name.slice(
                    matchIndex,
                    matchIndex + suburbQuery.length
                  );
                  const afterMatchText = suburb.name.slice(
                    matchIndex + suburbQuery.length
                  );
                  return (
                    <li key={index} onClick={() => handleSuburbClick(suburb)}>
                      {beforeMatchText}
                      <strong>{matchText}</strong>
                      {afterMatchText}, {suburb.state?.abbreviation}{" "}
                      {suburb.postcode}
                    </li>
                  );
                })}
              </ul>
            )}
          </dd>
        </dl>
      </div>
    </>
  );
}
