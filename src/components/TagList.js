import React from 'react'
import styled from 'styled-components'
import kebabCase from 'lodash/kebabCase'
import { Link } from 'gatsby'
import { rhythm } from '../utils/typography'

const TagList = ({ tags }) => (
  <List>
    {tags.map(tag => (
      <ListItem key={tag}>
        <Link
          style={{ textDecoration: 'none' }}
          to={`/tags/${kebabCase(tag)}/`}
        >
          {tag}
        </Link>
      </ListItem>
    ))}
  </List>
)

const List = styled.ul`
  list-style-type: none;
  margin: 0;
  padding: 0;
`

const ListItem = styled.li`
  display: inline-block;
  margin: 0;
  margin-right: ${rhythm(0.3)}
  padding: ${rhythm(0.1)} ${rhythm(0.3)};
  border-radius: ${rhythm(0.2)}
  transition: background-color 250ms ease-in-out 0s;
  background-color: #F8F9FB;
  color: #4C566A;
  cursor: pointer;

  &:hover {
    background-color: #ECEFF4;
    color: #4C566A;
  }
`

export default TagList
