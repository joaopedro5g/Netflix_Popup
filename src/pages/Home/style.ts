import styled from 'styled-components';

import { motion } from 'framer-motion';

export const Container = styled(motion.div)`
  width: 100%;
  height: 100vh;
  display:flex;
  ::-webkit-scrollbar {
    display: none;
  }
`;