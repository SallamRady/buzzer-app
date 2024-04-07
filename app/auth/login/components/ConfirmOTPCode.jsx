import MainBtn from "@/components/btns/MainBtn";
import TextInputField from "@/components/form/TextInputField";
import MainParagraph from "@/components/text/MainParagraph";

export default function ConfirmOTPCode() {
  return (
    <>
      <h6 className="text-lg font-bold dark:text-white my-2">Login Code</h6>
      <MainParagraph
        statment={"Enter the authentication code we sent at*******896"}
      />
      <form className="max-w-sm mt-10">
        <TextInputField
          placeholder={"+971 2356 5896"}
          disabled={true}
          handleOnChange={() => {}}
        />
        <TextInputField placeholder={"Login Code"} handleOnChange={() => {}} />
        <MainBtn text={"Submit"} type={"submit"} className={"w-full mt-20"} />
      </form>
    </>
  );
}
