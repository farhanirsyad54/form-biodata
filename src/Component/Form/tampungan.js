

// import table
const prof = {
    name: "",
    job: "",
    number: "",
    email: "",
    ava: "",
    listProfile: [],
  };

  const [{ name, job, number, email, ava, listProfile }, setProf] = React.useState(prof);

  const toggle = (data) => {
    setProf({
      name: "",
      job: "",
      number: "",
      email: "",
      ava: "",
      listProfile: data,
    });
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setProf((prevState) => ({ ...prevState, [name]: value }));
  };

  function Profile(props) {
    const [data, setData] = React.useState([]);
    const [cekData, setCek] = React.useState(false);

    const saveHandle = async (name, job, number, email, ava) => {
      setData((prevState) => [...prevState, { id: data.length + 1, name: name, job: job, number: number, email: email, ava: ava }]);
      setCek(true);
    };

    const dataTable = (data) => {
      props.reset(data);
      setCek(false);
    };

    React.useEffect(() => {
      if (cekData) {
        dataTable(data);
      }
    }, [cekData]);