import {
  StyledWrapper,
  StyledHead,
  StyledAvatar1,
  StyledInner1,
  StyledName1,
  StyledAvatar2,
  StyledInner2,
  StyledAvatar3,
  StyledInner3,
  StyledAvatar4,
  StyledInner4,
} from "./StyledBubbels";


interface VisitorProps {
  username: string,
  _id: string
}

const Bubbels = ({ data }: any) => {
  const getBubbles = () => {
    return data.visitors.map((visitor: VisitorProps, index: number) => {
      if (index == data.visitors.length - 1) {
        return (
          <StyledAvatar1 key={index + 'a'}>
              <StyledInner1>
                <StyledName1>
                  {visitor.username}
                </StyledName1>
              </StyledInner1>
            </StyledAvatar1>
          )
      }

      if (index == data.visitors.length - 2) {
        return (
          <StyledAvatar2 key={index + 'b'}>
            <StyledInner2>
              <StyledName1>
                {visitor.username}
              </StyledName1>
            </StyledInner2>
          </StyledAvatar2>
        )
      }

      if (index == data.visitors.length - 3) {
        return (
          <StyledAvatar3  key={index + 'c'}>
            <StyledInner3>
              <StyledName1>
                {visitor.username}
              </StyledName1>
            </StyledInner3>
          </StyledAvatar3>
        )
      }

      if (index == data.visitors.length - 4) {
        return (
          <StyledAvatar4  key={index + 'd'}>
            <StyledInner4>
              <StyledName1>
               {visitor.username}
              </StyledName1>
            </StyledInner4>
          </StyledAvatar4>
        )
      }
    })
  }
 
  return (
  <StyledWrapper>
    <StyledHead>
        <StyledName1 key={data.dj._id}>DJ {data.dj.username}</StyledName1>
      </StyledHead>
      {data.visitors.length > 0 && getBubbles()}
  </StyledWrapper>
  )
}

export default Bubbels;