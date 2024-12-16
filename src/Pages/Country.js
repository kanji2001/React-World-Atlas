import React, { useEffect, useState, useTransition } from 'react';
import { getCountryData } from '../api/postApi';
import Loader from "../Components/UI/Loader";
import CountryCard from '../Components/Layout/CountryCard';
import SearchFielter from '../Components/UI/SearchFielter';

const Country = () => {
  const [isPending, startTransition] = useTransition();
  const [countries, setCountries] = useState([]);
  const [search, setSearch] = useState(""); // Initialize as an empty string
  const [filter, setFilter] = useState("all");

  useEffect(() => {
    startTransition(async () => {
      const res = await getCountryData();
      setCountries(res.data);
    });
  }, []);

  if (isPending) return <Loader />;

  const searchCountry = (country) => {
    if (search) {
      return country.name?.common?.toLowerCase().includes(search.toLowerCase());
    }
    return true;
  };

  const filterRegion = (country) => {
    if (filter === "all") return true; // Include all regions if filter is "all"
    return country.region === filter;
  };

  const filterCountries = countries.filter((country) => searchCountry(country) && filterRegion(country));

  return (
    <>
      <section className='country-section'>
        <SearchFielter
          search={search}
          setSearch={setSearch}
          filter={filter}
          setFilter={setFilter}
          countries={countries}
          setCountries={setCountries}
        />
        <ul className='grid grid-four-cols'>
          {filterCountries.map((curCountry, index) => (
            <CountryCard country={curCountry} key={index} />
          ))}
        </ul>
      </section>
    </>
  );
};

export default Country;
