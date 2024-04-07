import { IconButton, InputAdornment, OutlinedInput, Paper } from "@mui/material";
import React, { ChangeEvent, FC, KeyboardEventHandler } from "react";
import { CallbackWith } from "../../../common/model/CallbackWith";
import { Search } from "@mui/icons-material";

type SearchInputProps = {
  value: string;
  onChange: CallbackWith<ChangeEvent<HTMLInputElement>>;
  onKeyDown: KeyboardEventHandler<HTMLInputElement>;
  onSearch: CallbackWith<string>;
}

export const SearchInput: FC<SearchInputProps> = ({ value, onChange, onKeyDown, onSearch }) => {
  return (
    <Paper>
      <OutlinedInput
        fullWidth
        value={value}
        onChange={onChange}
        onKeyDown={onKeyDown}
        id="movie-search"
        type="text"
        endAdornment={
          <InputAdornment position="end">
            <IconButton
              aria-label="search for the movie title"
              onClick={() => onSearch(value)}
              edge="end"
            >
              <Search />
            </IconButton>
          </InputAdornment>
        }
        placeholder="Search for a movie title"
      />
    </Paper>
  );
};