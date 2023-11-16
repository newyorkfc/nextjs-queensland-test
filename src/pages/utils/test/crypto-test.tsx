import crypto from "crypto";

export default function Test() {

    function encrypt(password) {
      const algorithm = "aes-256-cbc";
      const key =
        "f324fd9d776a5331fda5b2651c6d3e209e4601987e403084aa909064a84827d3";
      const iv = crypto.randomBytes(16);
      const cipher = crypto.createCipheriv(
        algorithm,
        Buffer.from(key, "hex"),
        iv
      );
      let encrypted = cipher.update(password);
      encrypted = Buffer.concat([encrypted, cipher.final()]);
      return iv.toString("hex") + ":" + encrypted.toString("hex");
    }

    const textToEncrypt = "Hello World!";
    const encrypted = encrypt(textToEncrypt);
    console.log(encrypted);

  return <div></div>;
}
