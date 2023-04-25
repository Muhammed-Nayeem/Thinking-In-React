import React from "react";

class Button extends React.Component {
  shouldComponentUpdate(nextProps) {
    const { change: currentChange, locale: currentLocale } = this.props;
    const { change: nextChange, locale: nextLocale } = nextProps;

    if (currentChange === nextChange && currentLocale === nextLocale) {
      return false;
    } else {
      return true;
    }
  }

  render() {
    const { change, locale, show, enable } = this.props;

    if (!enable) return null;

    return (
      <div className="button">
        <button type="button" onClick={() => change(locale)}>
          {locale === "bn-BD" ? "Change Clock" : "Gori Poriborton Korun"}
        </button>
        {show && <p>Conditional Rendering!</p>}
      </div>
    );
  }
}

export default Button;
