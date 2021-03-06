import React, { Component } from 'react';
import { Flex, Tooltip, Image } from '@chakra-ui/core';
import GenericLottie from './GenericLottie';

class BadgeBox extends Component {
  constructor(props) {
    super(props);
    this.state = {
      unlocked: false,
    };
  }

  render() {
    return (
      <Tooltip label={this.props.alt} placement="bottom">
      <Flex w="15em" h="15em" bg="blue.200" justifyContent="center" align="center"
        display="inline-block" padding="20px" margin="30px" 
        border="5px solid black" borderRadius="30px" objectFit="cover"
      >
        { this.props.unlocked 
          ? 
          (<GenericLottie animData={this.props.animData}/>) 
          : 
          (<Image src={'/images/question.png'} alt="Locked" />)
        }
      </Flex>
      </Tooltip>
    );
  }
}

export default BadgeBox;
