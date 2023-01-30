import React from "react";
import MyInput from "./UI/Input/input";
import MySelect from "./UI/Select/select"

const PostFilters = ({ filter, setFilter }) => {
  return (
    <div>
      <MyInput
        value={filter.surchQuerry}
        onChange={(event) =>
          setFilter({ ...filter, surchQuerry: event.target.value })
        }
        plaseholder="Search"
      ></MyInput>
      <MySelect
        defautValue="Sort by"
        options={[
          { value: "title", name: "By name" },
          { value: "body", name: "By description" },
        ]}
        value={filter.selectedSort}
        onChange={(selectedSort) =>
          setFilter({ ...filter, selectedSort: selectedSort })
        }
      ></MySelect>
      <MySelect
        defautValue="Search by"
        options={[
          { value: "id", name: "By number" },
          { value: "title", name: "By name" },
          { value: "body", name: "By description" },
        ]}
        value={filter.selectedSearch}
        onChange={(selectedSearch) =>
          setFilter({ ...filter, selectedSearch: selectedSearch })
        }
      ></MySelect>
    </div>
  );
};

export default PostFilters;
