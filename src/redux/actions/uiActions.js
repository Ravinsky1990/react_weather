export const setSpinner = (mode)=>{
	return{
		type:"SET_SPINNER",
		mode
	}
};

export const setSideDrower = (mode)=>{
	return{
		type:"SET_SIDEDROWER",
		mode
	}
};

export const setBackDrop = (mode)=>{
	return{
		type:"SET_BACKDROP",
		mode
	}
};

export const setModal = (mode)=>{
	return{
		type:"SET_MODAL",
		mode
	}
}