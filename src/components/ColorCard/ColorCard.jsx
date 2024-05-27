import PropTypes from 'prop-types';

export default function ColorCard({ color, onClick, flash }) {
    return (
        <div
            onClick={onClick}
            className={`colorCard ${color} ${flash ? "flash" : ""}`}>
        </div>
    );
}

ColorCard.propTypes = {
    color: PropTypes.string.isRequired,
    onClick: PropTypes.func.isRequired,
    flash: PropTypes.bool.isRequired,
};