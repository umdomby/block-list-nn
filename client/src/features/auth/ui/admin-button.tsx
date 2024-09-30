import { UiButton } from "@/shared/ui/ui-button";
import { useSignOut } from "../model/use-sign-out";
import {UiLink} from "@/shared/ui/ui-link";
import {ROUTES} from "@/shared/constants/routes";

export function AdminButton() {
  // const { isLoading, singOut } = useSignOut();
  return (
      <UiLink className="text-center" href={ROUTES.ADMIN}>
        ADMIN
      </UiLink>
  );
}
