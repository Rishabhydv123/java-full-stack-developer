import PropTypes from 'Props-types';

export const NameShow = ({lable, age}) => {
    return( <>
    <h4>
        {lable} - {age}
    </h4>
    </>
    );
};

NameShow.prototypes = {
    lable:PropTypes.string.isRequired

}
