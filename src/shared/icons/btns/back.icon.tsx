import MenusIconProps from "../icons.interface";

export default function BackIcon({ width = "20px", height = "20px", color = "black" }: MenusIconProps) {
  return (<svg width={width} height={height} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M4 7H15C16.8692 7 17.8039 7 18.5 7.40193C18.9561 7.66523 19.3348 8.04394 19.5981 8.49999C20 9.19615 20 10.1308 20 12C20 13.8692 20 14.8038 19.5981 15.5C19.3348 15.9561 18.9561 16.3348 18.5 16.5981C17.8039 17 16.8692 17 15 17H8.00001M4 7L7 4M4 7L7 10" stroke={color} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>)
}
